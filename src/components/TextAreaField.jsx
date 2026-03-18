export default function TextAreaField({ label, name, type, placeholder, value, handleField }) {
    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <textarea
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleField}
            ></textarea>
        </div >
    );
}