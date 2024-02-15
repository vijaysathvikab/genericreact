import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const GenericForm = ({
  formConfig = {},
  jsonInput = {},
  buttonConfig,
  setFormData,
  onSubmitFunc,
  headerText,
}) => {
  // Generate initial form values based on jsonInput
  const initialFormValues = Object.fromEntries(
    Object.keys(jsonInput)?.map((fieldName) => [fieldName, ""])
  );

  // Generate Yup validation schema based on jsonInput
  const validationSchema = Yup.object().shape(
    Object.fromEntries(
      Object.entries(jsonInput)?.map(([fieldName, fieldConfig]) => {
        let fieldSchema = Yup.string().matches(
          new RegExp(fieldConfig.validationRegex),
          {
            message: fieldConfig.validationMessage || `Invalid ${fieldName}.`,
            excludeEmptyString: true,
          }
        );

        if (fieldConfig.confirmField) {
          const confirmFieldName = fieldConfig.confirmField;
          fieldSchema = fieldSchema.oneOf(
            [Yup.ref(confirmFieldName), null],
            `${fieldName} must match ${confirmFieldName}.`
          );
        }

        return [fieldName, fieldSchema.required(`${fieldName} is required.`)];
      })
    )
  );

  // Use useFormik to handle form state, validation, and submission
  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Call the provided onSubmitFunc with the form values
      onSubmitFunc(values);
    },
  });

  return (
    <div className={formConfig.formClass} style={formConfig.formStyle}>
      <h2>{headerText}</h2>
      <form onSubmit={formik.handleSubmit}>
        {Object.entries(jsonInput)?.map(([fieldName, fieldConfig]) => (
          <div
            key={fieldName}
            style={{ width: fieldConfig.width || "100%" }}
            className={fieldConfig.cssStyle}
          >
            <label style={fieldConfig.labelStyle}>
              {fieldConfig.fieldName}
            </label>
            {fieldConfig.fieldType === "select" && (
              <select
                name={fieldName}
                style={fieldConfig.inputStyle}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={fieldConfig.inputClass}
              >
                <option value="">Select...</option>
                {fieldConfig.options &&
                  fieldConfig.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            )}
            {fieldConfig.fieldType === "multiselect" && (
              <select
                name={fieldName}
                multiple
                style={fieldConfig.inputStyle}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={fieldConfig.inputClass}
              >
                {fieldConfig.options &&
                  fieldConfig.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
              </select>
            )}
            {fieldConfig.fieldType !== "select" &&
              fieldConfig.fieldType !== "multiselect" && (
                <input
                  type={fieldConfig.fieldType || "text"}
                  name={fieldName}
                  style={fieldConfig.inputStyle}
                  value={formik.values[fieldName]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={fieldConfig.inputClass}
                />
              )}
            {formik.touched[fieldName] && formik.errors[fieldName] && (
              <p style={{ color: "red" }}>{formik.errors[fieldName]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className={buttonConfig?.buttonClass}
          style={buttonConfig?.buttonStyle}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export { GenericForm };
