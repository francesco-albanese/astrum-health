'use strict';

(function () {
    var sendMail = {
        cacheDom: function cacheDom() {
            this.contactUsForm = $('#contact-us form');
            this.submitButton = this.contactUsForm.find('.btn--submit');
            this.name = this.contactUsForm.find('#name');
            this.surname = this.contactUsForm.find('#surname');
            this.email = this.contactUsForm.find('#email');
            this.message = this.contactUsForm.find('#message');
        },
        validateForm: function validateForm(formBody) {
            var formValid = false;
            function validateEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }

            $.each(formBody, function (key, field) {
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
        bindEvents: function bindEvents() {
            this.submitButton.on('click', this.postFormToPHP.bind(this));
        },
        postFormToPHP: function postFormToPHP(event) {
            event.preventDefault();
            var body = {
                name: this.name.val(),
                surname: this.surname.val(),
                email: this.email.val(),
                message: this.message.val()
            };

            var formValid = this.validateForm(body);

            if (!formValid) {
                return;
            }

            var success = false;
            var emailClass = success ? "success" : "error";
            var emailResponseText = "";
            var emailResponse = '';
            $.ajax({ type: "POST", url: "./mail/mail.php", data: body, cache: false }).done(function (response) {
                success = true;
                emailResponseText = response;
                emailResponse = '<div class="email-outcome email-' + emailClass + '">' + emailResponseText + '</div>';
                if (!$('.email-outcome').length) {
                    sendMail.contactUsForm.append(emailResponse);
                }
                sendMail.contactUsForm.trigger('reset');
                setTimeout(function () {
                    $('.email-outcome').remove();
                }, 5000);
            }).fail(function (error) {
                success = false;
                emailResponseText = error.responseText;
                emailResponse = '<div class="email-outcome email-' + emailClass + '">' + emailResponseText + '</div>';
                if (!$('.email-outcome').length) {
                    sendMail.contactUsForm.append(emailResponse);
                }
                setTimeout(function () {
                    $('.email-outcome').remove();
                }, 5000);
            });
        },
        init: function init() {
            this.cacheDom();
            this.bindEvents();
        }
    };

    return sendMail.init();
})();
//# sourceMappingURL=sendmail.js.map
