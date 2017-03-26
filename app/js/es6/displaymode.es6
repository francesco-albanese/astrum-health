/**
 * The user should be able to select among three different displayMode:
 * - grid: the current data grid, slightly better styled
 * - list: all the models stacked, photo on the left and text on the right
 * - slider: a carousel which displays one model at a time, with the possibility to slide through all the models.
 * 
 * -- if you click on view more button, the current model with all the details will display in a modal
 */

(() => {
    `use strict`;
    const displayMode = {

        models: {
            "AQ4800PT": {
                "title": "AQ4800PT – Bariatric",
                "imageSrc": "images/AQ4800PT.jpg",
                "technicalFeatures": `
                <h4>Technical Features:</h4><p>Outer Dimensions</p><ul> <li>Width 74”</li><li>Length 108-3/4</li><li>Height 77-1/4”</li></ul><p>Effective Chamber Dimensions <ul> <li>Width 51”</li><li>Length 105-3/8”</li><li>Height 53-1/4”</li></ul></p><p>Options: <ul> <li>Data and Audit Tracker (AQDC)</li><li>Enhancements Include Additional</li><li>Temperature sensors</li><li>Chemical injection sensors</li><li>Disinfection level sensors</li><li>Data processor</li><li>Printer</li><li>Heatrae Sadia Megaflo Unvented Water Heater x2 (DDD300)</li><li>Ramps – 6 Foot: 2 pairs (AQRA6)</li><li>Ramps – 8 Foot: 2 pairs (AQRA8)</li><li>Lighted Wash Chamber (AQ60)</li></ul></p>                
                `
            },

            "AQ4000": {
                "title": "AQ4000",
                "imageSrc": "images/AQ4000.jpg",
                "technicalFeatures": `<h4>Technical Features:</h4><ul> <li>2 HP Motor/ Stainless Steel Pump</li><li>230V, 50/60Hz, Single Phase AC Operation</li></ul><p>Outer Dimensions: <ul> <li>Width 63-1/4”</li><li>Length 96-3/4” </li><li>Height 73” </li></ul></p><p>Effective Chamber Dimensions <ul> <li>Width 40-1/2” </li><li>Length 93-3/4” </li><li>Height 48-1/2”</li></ul></p><p>Options: <ul> <li>Data and Audit Tracker (AQDC)</li><li>Enhancements Include Additional</li><li>Temperature sensors</li><li>Chemical injection sensors</li><li>Disinfection level sensors</li><li>Data processor</li><li>Printer</li><li>Set of Three Utility Wash Trays for AQ4000 series (AQ4353)</li><li>Heatrae Sadia Megaflo Unvented Water Heater x2 (DDD300)</li><li>Ramps – 4 Foot: 2 pairs (AQRA4)</li><li>Ramps – 6 Foot: 2 pairs (AQRA6)</li><li>Ramps – 8 Foot: 2 pairs (AQRA8)</li><li>Lighted Wash Chamber (AQ60)</li></ul></p>`
            },

            "AQ3000": {
                "title": "AQ3000",
                "imageSrc": "images/AQ3000.jpg",
                "technicalFeatures": `<h4>Technical Features:</h4><ul> <li>1.5 HP Motor/ Stainless Steel Pump</li><li>115V, 50/60Hz, 20 Amp AC Operation (230V, 50/60Hz, Single Phase AC Operation Optional)</li><li>Wheelchair Wheel Rotation System</li></ul><p>Outer Dimensions <ul> <li>Width 33-1/2” </li><li>Length 64”</li><li>Height 62”</li></ul></p><p>Effective Chamber Dimensions <ul> <li>Width 26-1/2”</li><li>Length 51-1/4” </li><li>Height 36-3/4” </li></ul></p><p>Options: <ul> <li>Data and Audit Tracker (AQDC)</li><li>Enhancements Include Additional</li><li>Temperature sensors</li><li>Chemical injection sensors</li><li>Disinfection level sensors</li><li>Data processor</li><li>Printer</li><li>Heatrae Sadia Megaflo Unvented Water Heater x2 (DDD300)</li><li>Equipment Rack (AQ330E)</li><li>Set of Two Utility Wash Trays (AQ335E)</li><li>Ramps – 4 Foot: 2 pairs (AQRA4)</li><li>Ramps – 6 Foot: 2 pairs (AQRA6)</li><li>Lighted Wash Chamber (AQ60)</li></ul></p>`
            },

            "AQ3500": {
                "title": "AQ3500",
                "imageSrc": "images/AQ3500.jpg",
                "technicalFeatures": `<h4>Technical Features:</h4><p> <ul> <li>1.5 HP Motor/ Stainless Steel Pump</li><li>115V, 50/60Hz, 20 Amp AC Operation</li></ul></p><p>Options: <ul> <li>Data and Audit Tracker (AQDC)</li><li>Enhancements Include Additional</li><li>Temperature sensors</li><li>Chemical injection sensors</li><li>Disinfection level sensors</li><li>Data processor</li><li>Heatrae Sadia Megaflo Unvented Water Heater x2 (DDD300)</li><li>Equipment Rack (AQ330E)</li><li>Set of Two Utility Wash Trays (AQ335E)</li><li>Ramps – 4 Foot: 2 pairs (AQRA4)</li><li>Ramps – 6 Foot: 2 pairs (AQRA6)</li><li>Conveyor Belt Transfer Floor System (AQ68)</li><li>Lighted Wash Chamber (AQ60)</li><li>Printer</li></ul></p>`
            }
        },

        template: `
            <div class="model-content flex"> <h3>AQ4800PT – Bariatric</h3> <img class="content__image" src="images/AQ4800PT.jpg"> <p>Offering the best solution on the market to cater for your bariatric equipment. Stainless steel spray arms combined with 83 spray nozzles for improved cleaning efficiency.</p><button class="btn btn--view-more" data-view-more="AQ4800PT">View More</button></div><div class="model-content flex"> <h3>AQ4000</h3> <img class="content__image" src="images/AQ4000.jpg"> <p>The ultimate solution designed to cater for hospitals and large medical equipment. Can accommodate hospital beds and similarly sized equipment. Stainless steel spray arms combined with 60 spray nozzles for improved cleaning efficiency.</p><button class="btn btn--view-more" data-view-more="AQ4000">View More</button></div><div class="model-content flex"> <h3>AQ3000</h3> <img class="content__image" src="images/AQ3000.jpg"> <p>The standard washer within the AquaPhase range, maintaining the same quality-cleaning efficacy enabled by 23 wash nozzles.</p><button class="btn btn--view-more" data-view-more="AQ3000">View More</button></div><div class="model-content flex"> <h3>AQ3500</h3> <img class="content__image" src="images/AQ3500.jpg"> <p>Provides a larger wash chamber within the AQ3000 range of washers. Maintains superior wash efficacy enabled by 31 wash nozzles.</p><button class="btn btn--view-more" data-view-more="AQ3500">View More</button></div><div class="model-content--universal-features"> <h3>Universal Technical Features:</h3> <p> <ul> <li>Plug and Play’ Installation</li><li>Detergent Wash, Rinse, and Disinfect cycles</li><li>Wash Cycle Time: 3, 5, or 7 Minute options</li><li>LCD Status Display</li><li>Water Temperature Monitor (Front-mounted Digital Temperature Gauge)</li><li>Door Window</li><li>Stainless Steel Chamber</li><li>Stainless Steel Oscillating Spray Arms</li><li>Dedicated Disinfection Delivery Pipework</li><li>Heavy-Duty Castor Wheels</li><li>Powerful Pump and Motor</li></ul> </p></div>
        `, 

        sliderIndex: 0,

        chooseDisplayMode(mode) {
            this.removeButtonsEventListeners();
            switch(mode) {
                //call the function to create the grid
                case `grid`:
                    this.displayGrid();
                    break;
                //call the function to create the list
                case `list`:
                    this.displayList();
                    break;
                //call the function to create the slider
                case `slider`:
                    this.displaySlider();
                    break;
                default:
                    this.displayGrid();
                    break;
            }
        },

        removeButtonsEventListeners() {
            this.viewMoreButtons = document.querySelectorAll(`.model-content .btn--view-more`);
            if (this.viewMoreButtons.length) {
                this.viewMoreButtons = null;
            }
        },

        bindEventsToViewMoreButtons() {
            this.viewMoreButtons = document.querySelectorAll(`.model-content .btn--view-more`);
            /* Remember to remove the event listeners!!!!! */
            [].forEach.call(this.viewMoreButtons, (viewMoreButton) => {
                viewMoreButton.addEventListener(`click`, this.populateViewMoreModal);
            });
        },

        displayGrid() {
            this.exploreModelsContainer.classList.add(`flex`);
            this.exploreModelsContainer.innerHTML = ``;
            this.exploreModelsContainer.innerHTML = this.template;
            this.exploreModelsContainer.classList.remove(`display-list`);
            this.exploreModelsContainer.classList.remove(`display-slider`);
            this.bindEventsToViewMoreButtons();
        },

        displayList() {
            this.exploreModelsContainer.innerHTML = ``;
            this.exploreModelsContainer.innerHTML = this.template;
            this.exploreModelsContainer.classList.add(`flex`);
            this.exploreModelsContainer.classList.add(`display-list`);
            this.exploreModelsContainer.classList.remove(`display-slider`);
            const allModelsContent = this.exploreModelsContainer.querySelectorAll(`.model-content`);

            [].forEach.call(allModelsContent, (modelContent) => {
                /* create containers to wrap elements */
                const modelContentContainer = document.createElement(`div`);
                const modelParagraphContainer = document.createElement(`div`);

                /* add classes */
                modelContentContainer.classList.add(`model-content-container`);
                modelParagraphContainer.classList.add(`model-paragraph-container`);

                /* append nodes to DOM */
                displayMode.appendNodes(modelContentContainer, modelContent.querySelector(`img`));
                displayMode.appendNodes(modelParagraphContainer, [modelContent.querySelector(`p`), modelContent.querySelector(`.btn--view-more`)]);
                displayMode.appendNodes(modelContentContainer, modelParagraphContainer);
                displayMode.appendNodes(modelContent, modelContentContainer);
            });



            this.bindEventsToViewMoreButtons();
        },

        displaySlider() { 
            this.exploreModelsContainer.innerHTML = ``;
            this.exploreModelsContainer.innerHTML = this.template;
            this.exploreModelsContainer.classList.remove(`display-list`, `flex`);
            this.exploreModelsContainer.classList.add(`display-slider`);
            let allModelsContent = this.exploreModelsContainer.querySelectorAll(`.model-content`);
            let tabsTitleContainerWidth = document.querySelector(`.tabs-title-container`).getBoundingClientRect().width;
            this.modelWidth = tabsTitleContainerWidth;
            [].forEach.call(allModelsContent, (modelContent) => {
                modelContent.style.width = `${tabsTitleContainerWidth}px`;
            });

            /* create container for all sliders and make its width equal to the length of the items */
            const sliderWrapperContainer = document.createElement(`div`);
            const modelContentContainer = document.createElement(`div`);
            sliderWrapperContainer.classList.add(`slider-wrapper-container`);
            modelContentContainer.classList.add(`model-content-container`);
            sliderWrapperContainer.style.width = `${tabsTitleContainerWidth}px`;
            modelContentContainer.style.width = `${tabsTitleContainerWidth * allModelsContent.length}px`;

            /* make slider container available elsewhere */
            this.sliderContainer = modelContentContainer;

            /* append the content container to the DOM */
            this.appendNodes(this.exploreModelsContainer, sliderWrapperContainer);
            this.appendNodes(sliderWrapperContainer, modelContentContainer);

            /* append all models to content container */
            [].forEach.call(allModelsContent, (modelContent) => this.appendNodes(modelContentContainer, modelContent));

            /* create arrows templates */
            const leftArrowContainer = document.createElement(`div`);
            const rightArrowContainer = document.createElement(`div`);
            const leftArrow = document.createElement(`i`);
            const rightArrow = document.createElement(`i`);
            leftArrowContainer.classList.add(`arrow-container`, `arrow-container--left`);
            rightArrowContainer.classList.add(`arrow-container`, `arrow-container--right`);            
            leftArrow.classList.add(`fa`, `fa-angle-left`, `fa-3x`);
            rightArrow.classList.add(`fa`, `fa-angle-right`, `fa-3x`);
            leftArrowContainer.setAttribute(`data-slide`, `left`);
            rightArrowContainer.setAttribute(`data-slide`, `right`);
            this.appendNodes(leftArrowContainer, leftArrow);
            this.appendNodes(rightArrowContainer, rightArrow);
            this.appendNodes(sliderWrapperContainer, [leftArrowContainer, rightArrowContainer]);

            this.bindClickToArrows([leftArrowContainer, rightArrowContainer]);

            this.bindEventsToViewMoreButtons();
        },

        bindClickToArrows(arrows) {
            [].forEach.call(arrows, (arrow) => {
                arrow.addEventListener(`click`, this.slideArrow);
            });
        },

        moveSlider(isRight) {
            let transformProp = (function(){
                let testEl = document.createElement('div');
                if(testEl.style.transform == null) {
                    let vendors = ['Webkit', 'Moz', 'ms'];
                    for(let vendor in vendors) {
                    if(testEl.style[ vendors[vendor] + 'Transform' ] !== undefined) {
                        return vendors[vendor] + 'Transform';
                    }
                    }
                }
                return 'transform';
            })();
            let allModelsContentLength = displayMode.exploreModelsContainer.querySelectorAll(`.model-content`).length - 1;
            let movement = 0;

            if (isRight) {
                if (displayMode.sliderIndex < allModelsContentLength) {
                    displayMode.sliderIndex++;
                } else {
                    displayMode.sliderIndex = 0;
                }
            } else {
                if (displayMode.sliderIndex <= 0) {
                    displayMode.sliderIndex = allModelsContentLength;
                } else {
                    displayMode.sliderIndex--;
                }
            }
            movement = (displayMode.modelWidth * displayMode.sliderIndex) * -1;

            displayMode.sliderContainer.style[transformProp] = `translate3d(${movement}px, 0 ,0)`;

        },

        slideArrow(event) {
            let currentArrow = event.target.getAttribute(`data-slide`);
            if(currentArrow === `right`) {
                displayMode.moveSlider(true);
            } else {
                displayMode.moveSlider(false);
            }
        },

        populateViewMoreModal(event) {
            let currentButton = event.target;
            let currentDataViewMore = currentButton.getAttribute(`data-view-more`);
            displayMode.initModal(currentDataViewMore);
        },

        initModal(modelNumber) {
            /* create containers */
            const modalContainerOuter = document.createElement(`div`);
            const modalDismiss = document.createElement(`span`);
            const modalContainerInner = document.createElement(`div`);
            const modalTitle = document.createElement(`h3`);
            const modalImage = document.createElement(`img`);
            const modalFeatures = document.createElement(`div`);

            /* assign classes */
            modalContainerOuter.classList.add(`modal-container-outer`);
            modalContainerInner.classList.add(`modal-container-inner`);
            modalDismiss.classList.add(`modal-dismiss`);
            modalFeatures.classList.add(`modal-features`);

            /* fill containers with content */
            modalDismiss.innerHTML = `&times;`;
            modalTitle.innerHTML = this.models[modelNumber].title;
            modalImage.src = this.models[modelNumber].imageSrc;
            modalFeatures.innerHTML = this.models[modelNumber].technicalFeatures;

            /* append elements to DOM */
            this.appendNodes(modalContainerOuter, modalDismiss);
            this.appendNodes(modalContainerInner, [modalTitle, modalImage, modalFeatures]);
            this.appendNodes(modalContainerOuter, modalContainerInner);
            this.appendNodes(document.body, modalContainerOuter);

            /* dismiss modal */
            modalDismiss.addEventListener(`click`, function () {
                modalContainerOuter.parentNode.removeChild(modalContainerOuter);
                document.removeEventListener(`keydown`, addListener);
            });

            document.addEventListener(`keydown`, addListener);

            function addListener(event) {
                if (event.keyCode == 27 && modalContainerOuter) {
                    modalContainerOuter.parentNode.removeChild(modalContainerOuter);
                    document.removeEventListener(`keydown`, addListener);
                }
            }
        },

        appendNodes(container, listOfNodes) {
            if (Object.prototype.toString.call(listOfNodes) !== "[object Array]") listOfNodes = [listOfNodes];
            listOfNodes.forEach((node) => container.appendChild(node));
        },

        getDisplayModeFromLocalStorage() {
            if (!localStorage.displayMode) {
                let firstAvailableDisplayMode = document.querySelectorAll(`.display-mode .btn`)[0].getAttribute(`data-display`);
                this.setDisplayModeToLocalStorage(firstAvailableDisplayMode);
                return localStorage.displayMode;
            }
            return localStorage.displayMode;
        },

        setDisplayModeToLocalStorage(mode) {
            localStorage.displayMode = mode;
        },

        switchDisplayMode(event) {
            let currentButton = event.target;
            [].forEach.call(displayMode.displayModeButtons, (button) => {
                button.classList.remove(`selected`);
            });
            currentButton.classList.add(`selected`);
            let currentDataDisplay = currentButton.getAttribute(`data-display`);
            displayMode.setDisplayModeToLocalStorage(currentDataDisplay);
            return displayMode.chooseDisplayMode(currentDataDisplay);
        },
        
        cacheDOM() {
            this.exploreModelsContainer = document.querySelector(`.tab__content--explore-all-models`);
            this.displayModeButtons = document.querySelectorAll(`.display-mode .btn--display`);
        },

        bindEvents() {
            //attach click event to all buttons
            [].forEach.call(this.displayModeButtons, (button) => {
                button.addEventListener(`click`, this.switchDisplayMode);
            });
        },

        addClassSelectedToDefaultDisplayModeButton() {
            [].forEach.call(this.displayModeButtons, (button) => {
                button.classList.remove(`selected`);
                if(button.getAttribute(`data-display`) === localStorage.displayMode) {
                    button.classList.add(`selected`);
                    return;
                }
            });
        },

        init() {
            this.cacheDOM();
            const defaultDisplayMode = this.getDisplayModeFromLocalStorage();
            this.chooseDisplayMode(defaultDisplayMode);
            this.addClassSelectedToDefaultDisplayModeButton();
            this.bindEvents();
        }
    };

    return displayMode.init();
})();