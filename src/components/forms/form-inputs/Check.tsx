const Check = (
	{
		title = '',
		name = '',
		label = 'Label is empty',
		checked,
		handleCheckboxChange,
	}: any
): JSX.Element => {
	return (
		<div className='flex flex-row input-checkbox'>
			<label
				htmlFor={name}
				onClick={handleCheckboxChange}
				className='flex flex-row font-bold text-gray-500 cursor-pointer whitespace-nowrap m-0'>
				<input
					title={title}
					name={name}
					type='checkbox'
					checked={checked}
					onChange={handleCheckboxChange}
					onClick={handleCheckboxChange}
				/>
				<span>{label}</span>
			</label>
		</div>
	);
};

export default Check;
