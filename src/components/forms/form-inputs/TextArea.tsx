const TextArea = ({
	name = '',
	label = 'Label is empty',
	placeholder = 'Placeholder is empty',
	value,
	spellCheck = true,
	rows = 4,
	wrap = 'soft',
}: any) => {
	return (
		<div className='input-container'>
			<label
				htmlFor={name}
				className='block uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-2'>
				{label}
			</label>
			<textarea
				name={name}
				rows={rows}
				placeholder={placeholder}
				defaultValue={value}
				spellCheck={spellCheck}
				wrap={wrap}
				className='appearance-none block w-full py-3 px-4 leading-tight focus:outline-none whitespace-pre-wrap'
			/>
		</div>
	);
};

export default TextArea;
