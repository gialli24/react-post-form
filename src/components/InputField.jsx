export default function InputField({ label, name, type, placeholder, value, handleField }) {
    return (
        <div className='field'>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleField}
            />
        </div >
    );
}