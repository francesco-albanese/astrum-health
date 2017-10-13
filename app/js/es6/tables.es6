(() => {
    function checkStatus(response) {
        var error = null;
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    function parseJSON(response) {
        return response.json()
    }

    let production = false;
    let jsonPath = production ? "/js/table-data.json" : "/js/es6/table-data.json";

    fetch(jsonPath)
        .then(checkStatus)
        .then(parseJSON)
        .then((data) => dynamicTable.init(data))
        .catch((error) => {
            throw('request failed', error)
        })
    
    const dynamicTable = {
        cacheDom() {
            this.$tableContainer = $('.table-container');
            this.$tabActive = $('.tab__title[data-tab="1"]');
        },

        createTableRow() {
            let $tableRow = $('<div />').addClass('table-row');
            dynamicTable.$tableContainer.append($tableRow);
            return $tableRow;
        },

        createTableCell() {
            let $tableCell = $('<div />').addClass('table-cell');
            this.$tableRow.append($tableCell);
            return $tableCell;
        },

        generateRowTitles(rowTitles) {
            let $tableRow = this.createTableRow();
            this.$tableRowTitles = $tableRow;

            rowTitles.forEach((titleObj, index) => {
                let $tableHeader = $('<div />').addClass('table-header table-cell').addClass(`table-col${index+1}`);
                $tableHeader.text(titleObj.title);
                $tableRow.append($tableHeader);
            });
        },

        generateRowData(rowData) {
            rowData.forEach((tableRow) => {
                let $tableRows = this.createTableRow();
                this.generateTableCells($tableRows, tableRow);
            });
        },

        generateTableCells(tableRow, tableRowObj) {
            this.$tableRow = tableRow;
            tableRowObj.rows.forEach((row, index) => {
                let $tableCell = [this.createTableCell()];
                $tableCell.forEach((cell) => {
                    this.generateTableCellContent(row, cell);
                    this.assignClasses(row, cell, index + 1);
                });
            }); 
        },

        generateTableCellContent(row, tableCell) {
            let content = "";
            if (row.isEmptyCell) {
                content += "-";
            } else if (row.isTicked) {
                content += "<i class='fa fa-dot-circle-o'></i>";
            } else {
                content = row.content;
            }
            tableCell.html(content);
        },

        assignClasses(row, tableCell, index) {
            let cssClass = "";
            if (row.isTitle) {
                cssClass += "table-cell-title";
            } else if (row.isUnitMeasure) {
                cssClass += "table-cell-unit-measure";
            } else if (row.isNotApplicable) {
                cssClass += "table-cell-not-applicable";
            }
            tableCell.addClass(cssClass).addClass(`table-col${index}`);
        },

        tableHeadersFixed(tableRow) {
            let tableRowCloned = tableRow.clone().insertAfter(tableRow);
            let tableLeftPosition = $('.table-container').position().left;
            const $tabContent = $('.tab__content.overflow-auto');
            tableRowCloned.addClass('table-row-cloned');
            tableRowCloned.css('top', $('.header--fixed-top').outerHeight());
            $(window).on('scroll', () => {
                let scrollTop = $(window).scrollTop();
                let tableRowOffset = tableRow.offset().top - tableRow.outerHeight();
                if (scrollTop >= tableRowOffset) {
                    tableRowCloned.addClass('visible');
                    $('.table-row-cloned.visible').css('left', Math.round($tabContent.position().left) + (-$tabContent.scrollLeft()));
                } else {
                    tableRowCloned.removeClass('visible');
                }
            });

            $tabContent.on('scroll', function() {
                $('.table-row-cloned.visible').css('left', Math.round($(this).position().left) + (-$(this).scrollLeft()));
            })
        },

        bindEvents() {
            this.$tabActive.on('click', () => {
                this.tableHeadersFixed(this.$tableRowTitles);
            });

            $('.table-cell').hover(function() {
                $(this).parent().addClass('highlight');
                let index = $(this).index() + 1;
                $(`.table-col${index}`).addClass('highlight');
            }, function() {
                $(this).parent().removeClass('highlight');
                let index = $(this).index() + 1;
                $(`.table-col${index}`).removeClass('highlight');
            });
        },

        init(data) {
            this.cacheDom();
            this.generateRowTitles(data.rowTitles);
            this.generateRowData(data.rowData);
            this.bindEvents();
        }
    };
    
})();
