"use strict";

(function () {
    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }

    function parseJSON(response) {
        return response.json();
    }

    var production = true;
    var jsonPath = production ? "/js/table-data.json" : "/js/es6/table-data.json";

    fetch(jsonPath).then(checkStatus).then(parseJSON).then(function (data) {
        return dynamicTable.init(data);
    }).catch(function (error) {
        console.log('request failed', error);
    });

    var dynamicTable = {
        cacheDom: function cacheDom() {
            this.$tableContainer = $('.table-container');
            this.$tabActive = $('.tab__title[data-tab="1"]');
        },
        createTableRow: function createTableRow() {
            var $tableRow = $('<div />').addClass('table-row');
            dynamicTable.$tableContainer.append($tableRow);
            return $tableRow;
        },
        createTableCell: function createTableCell() {
            var $tableCell = $('<div />').addClass('table-cell');
            this.$tableRow.append($tableCell);
            return $tableCell;
        },
        generateRowTitles: function generateRowTitles(rowTitles) {
            var $tableRow = this.createTableRow();
            this.$tableRowTitles = $tableRow;

            rowTitles.forEach(function (titleObj, index) {
                var $tableHeader = $('<div />').addClass('table-header table-cell').addClass("table-col" + (index + 1));
                $tableHeader.text(titleObj.title);
                $tableRow.append($tableHeader);
            });
        },
        generateRowData: function generateRowData(rowData) {
            var _this = this;

            rowData.forEach(function (tableRow) {
                var $tableRows = _this.createTableRow();
                _this.generateTableCells($tableRows, tableRow);
            });
        },
        generateTableCells: function generateTableCells(tableRow, tableRowObj) {
            var _this2 = this;

            this.$tableRow = tableRow;
            tableRowObj.rows.forEach(function (row, index) {
                var $tableCell = [_this2.createTableCell()];
                $tableCell.forEach(function (cell) {
                    _this2.generateTableCellContent(row, cell);
                    _this2.assignClasses(row, cell, index + 1);
                });
            });
        },
        generateTableCellContent: function generateTableCellContent(row, tableCell) {
            var content = "";
            if (row.isEmptyCell) {
                content += "-";
            } else if (row.isTicked) {
                content += "<i class='fa fa-dot-circle-o'></i>";
            } else {
                content = row.content;
            }
            tableCell.html(content);
        },
        assignClasses: function assignClasses(row, tableCell, index) {
            var cssClass = "";
            if (row.isTitle) {
                cssClass += "table-cell-title";
            } else if (row.isUnitMeasure) {
                cssClass += "table-cell-unit-measure";
            } else if (row.isNotApplicable) {
                cssClass += "table-cell-not-applicable";
            }
            tableCell.addClass(cssClass).addClass("table-col" + index);
        },
        tableHeadersFixed: function tableHeadersFixed(tableRow) {
            var tableRowCloned = tableRow.clone().insertAfter(tableRow);
            var tableLeftPosition = $('.table-container').position().left;
            var $tabContent = $('.tab__content.overflow-auto');
            tableRowCloned.addClass('table-row-cloned');
            tableRowCloned.css('top', $('.header--fixed-top').outerHeight());
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                var tableRowOffset = tableRow.offset().top - tableRow.outerHeight();
                if (scrollTop >= tableRowOffset) {
                    tableRowCloned.addClass('visible');
                    $('.table-row-cloned.visible').css('left', Math.round($tabContent.position().left) + -$tabContent.scrollLeft());
                } else {
                    tableRowCloned.removeClass('visible');
                }
            });

            $tabContent.on('scroll', function () {
                $('.table-row-cloned.visible').css('left', Math.round($(this).position().left) + -$(this).scrollLeft());
            });
        },
        bindEvents: function bindEvents() {
            var _this3 = this;

            this.$tabActive.on('click', function () {
                _this3.tableHeadersFixed(_this3.$tableRowTitles);
            });

            $('.table-cell').hover(function () {
                $(this).parent().addClass('highlight');
                var index = $(this).index() + 1;
                $(".table-col" + index).addClass('highlight');
            }, function () {
                $(this).parent().removeClass('highlight');
                var index = $(this).index() + 1;
                $(".table-col" + index).removeClass('highlight');
            });
        },
        init: function init(data) {
            this.cacheDom();
            this.generateRowTitles(data.rowTitles);
            this.generateRowData(data.rowData);
            this.bindEvents();
            // console.info(data);
        }
    };
})();
//# sourceMappingURL=tables.js.map
