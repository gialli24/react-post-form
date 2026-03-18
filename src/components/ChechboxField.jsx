export default function CheckboxField({ label, name, checked, handleField }) {
    return (
        <div className='inline-field'>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={handleField}
            />
            <label htmlFor={name}>{label}</label>
        </div >
    );
}