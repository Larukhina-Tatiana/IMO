class FormsValidation {
  selectors = {
    form: "[data-js-form]",
    fieldErrors: "[data-js-form-field-errors]",
  };

  errorMessages = {
    valueMissing: () => "Пожалуйста, заполните это поле",
    patternMismatch: ({ title }) => title || "Данные не соответствуют формату",
    tooShort: ({ minLength }) =>
      `Слишком короткое значение, минимум символов — ${minLength}`,
    tooLong: ({ maxLength }) =>
      `Слишком длинное значение, ограничение символов — ${maxLength}`,
  };

  constructor() {
    this.bindEvents();
  }

  manageErrors(formControlElement, errorMessages) {
    const fieldErrorsElement = formControlElement.parentElement.querySelector(
      this.selectors.fieldErrors
    );

    fieldErrorsElement.innerHTML = errorMessages
      .map((message) => `<span class="form-error">${message}</span>`)
      .join("");
  }

  validateField(formControlElement) {
    const errors = formControlElement.validity;
    const errorMessages = [];

    Object.entries(this.errorMessages).forEach(
      ([errorType, getErrorMessage]) => {
        if (errors[errorType]) {
          errorMessages.push(getErrorMessage(formControlElement));
        }
      }
    );

    this.manageErrors(formControlElement, errorMessages);

    const isValid = errorMessages.length === 0;

    formControlElement.ariaInvalid = !isValid;
    return isValid;
  }

  onBlur(event) {
    const { target } = event;
    const isFormField = target.closest(this.selectors.form);
    const isRequired = target.required;

    if (isFormField && isRequired) {
      this.validateField(target);
    }
  }

  onChange(event) {
    const { target } = event;
    const isRequired = target.required;
    const isToggleType = ["radio", "checkbox"].includes(target.type);

    if (isToggleType && isRequired) {
      this.validateField(target);
    }
  }

  onSubmit(event) {
    const isFormElement = event.target.matches(this.selectors.form);

    if (!isFormElement) {
      return;
    }

    const requiredControlElements = [...event.target.elements].filter(
      ({ required }) => required
    );
    let isFormValid = true;
    let firstInvalidFieldControl = null;

    requiredControlElements.forEach((element) => {
      const isFieldValid = this.validateField(element);

      if (!isFieldValid) {
        isFormValid = false;

        if (!firstInvalidFieldControl) {
          firstInvalidFieldControl = element;
        }
      }
    });

    if (!isFormValid) {
      event.preventDefault();
      firstInvalidFieldControl.focus();
    }
    if (isFormValid) {
      console.log(selectors.form);

      const formData = new FormData(this.selectors.form);
      formData[e.target.name] = e.target.value;
      console.log(formData);

      console.log(Object.fromEntries(formData));
    }
  }

  bindEvents() {
    document.addEventListener(
      "blur",
      (event) => {
        this.onBlur(event);
      },
      { capture: true }
    );
    document.addEventListener("change", (event) => this.onChange(event));
    document.addEventListener("submit", (event) => this.onSubmit(event));
  }
}

new FormsValidation();

window.addEventListener("click", function (event) {
  if (event.target.closest(".person-form__box")) {
    // console.log(document.querySelector("input:focus"));
    const activeForm = event.target.closest(".personal-data__content-item");
    const activeEl = document.querySelector(".active");

    if (activeEl) activeEl.classList.remove("active");

    if (activeForm.querySelector(".person-form__info"))
      activeForm.querySelector(".person-form__info").classList.add("active");
  }
});
