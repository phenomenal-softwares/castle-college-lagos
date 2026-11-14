import styles from './FormField.module.css'

function FormField({ label, name, value, onChange, type = 'text', placeholder, error }) {
  return (
    <label className={`${styles.field} field`}>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error ? <small className="field-error">{error}</small> : null}
    </label>
  )
}

export default FormField
