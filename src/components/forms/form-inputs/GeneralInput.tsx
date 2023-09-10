const GeneralInput = ({
	name = '',
	label = 'Label is empty',
	placeholder = 'Placeholder is empty',
	value,
	type = 'text',
	maxLength = 52,
	pattern = null,
	onChange = null,
	className = null
}: any) => {
	return (
		<div className='input-container'>
			<label
				htmlFor={name}
				className='block uppercase tracking-wide text-gray-700 dark:text-gray-200'>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				maxLength={maxLength}
				pattern={pattern}
				placeholder={placeholder}
				defaultValue={value}
				onChange={onChange}
				className={`rounded bg-gray-100 text-gray-700 ${className}`}
			/>
		</div>
	);
};

export default GeneralInput;
