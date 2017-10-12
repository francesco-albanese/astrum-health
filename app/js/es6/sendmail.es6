'use strict';

(() => {
    const sendMail = {
        cacheDom() {
            this.contactUsForm = $('#contact-us form');
            this.submitButton = this.contactUsForm.find('.btn--submit');
            this.name = this.contactUsForm.find('#name');
            this.surname = this.contactUsForm.find('#surname');
            this.email = this.contactUsForm.find('#email');
            this.message = this.contactUsForm.find('#message');
        },

        validateForm(formBody) {
            let formValid = false;
            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            $.each(formBody, (key, field) => {
                if (key !== "surname") {
                    if (!field.length) {
                        $(sendMail[key]).addClass('form-error');
                        formValid = false;
                    } else {
                        $(sendMail[key]).removeClass('form-error');
                        formValid = true;
                    }
                }
                if (key === "email") {
                    if (field.length && !validateEmail(field)) {
                        $(sendMail[key]).addClass('form-error');
                        formValid = false;
                    }
                }
            });
            return formValid;
        },

        bindEvents() {
            this.submitButton.on('click', this.postFormToPHP.bind(this));
        },

        postFormToPHP(event) {
            event.preventDefault();
            const body = {
                name: this.name.val(),
                surname: this.surname.val(),
                email: this.email.val(),
                message: this.message.val()
            };

            const formValid = this.validateForm(body);

            if (!formValid) {
                return;
            }

            let success = false;
            let emailClass = success
                ? "success"
                : "error";
            let emailResponseText = "";
            let emailResponse = ``;
            $.ajax({type: "POST", url: "./mail/mail.php", data: body, cache: false})
            .done(function (response) {
                success = true;
                emailResponseText = response;
                emailResponse = `<div class="email-outcome email-${emailClass}">${emailResponseText}</div>`;
                if (!$('.email-outcome').length) {
                    sendMail.contactUsForm.append(emailResponse);
                }
                sendMail.contactUsForm.trigger('reset');
                setTimeout(() => {
                    $('.email-outcome').remove();
                }, 5000);
            })
            .fail(function (error) {
                success = false;
                emailResponseText = error.responseText;
                emailResponse = `<div class="email-outcome email-${emailClass}">${emailResponseText}</div>`;
                if (!$('.email-outcome').length) {
                    sendMail.contactUsForm.append(emailResponse);
                }
                setTimeout(() => {
                    $('.email-outcome').remove();
                }, 5000);
            });
        },

        init() {
            this.cacheDom();
            this.bindEvents();
        }
    };

    return sendMail.init();
})();