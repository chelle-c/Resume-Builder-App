const GroupInput = ({
	name = '',
	label = 'Label is empty',
	secondLabel = 'Sample text',
	placeholder = 'Placeholder is empty',
	value,
	type = 'text',
	maxLength = 52,
	pattern = null,
	onChange = null,
}: any) => {
	return (
		<div>
			<label
				htmlFor={name}
				className='block uppercase tracking-wide text-gray-700 dark:text-gray-200 mb-2'>
				{label}
			</label>
			<div className='flex flex-wrap items-stretch w-full mb-4 relative'>
				<div className='flex -mr-px'>
					<span className='flex items-center leading-normal bg-grey-lighter rounded rounded-e-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-zinc-900 text-base dark:bg-slate-800 dark:text-white'>
						{secondLabel}
					</span>
				</div>
				<input
					id={name}
					name={name}
					type={type}
					maxLength={maxLength}
					pattern={pattern}
					placeholder={placeholder}
					defaultValue={value}
					onChange={onChange}
					className={
						'input-group flex-shrink flex-grow flex-1 leading-normal w-px border h-10 border-grey-light rounded rounded-s-none px-3 relative'
					}
				/>
			</div>
		</div>
	);
};

export default GroupInput;
