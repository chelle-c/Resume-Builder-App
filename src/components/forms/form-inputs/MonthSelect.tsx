const MonthSelect = ({ title, name, value }: any): JSX.Element => {
	return (
		<div className='input-container w-80 pr-3 mb-6 md:mb-0'>
			<label
				htmlFor={name}>
				Month
			</label>
			<div className='relative'>
				<select
					title={title}
					name={name}
					required
					aria-required
					defaultValue={value}>
					<option disabled>Select a month</option>
					<option value={'January'}>January</option>
					<option value={'February'}>February</option>
					<option value={'March'}>March</option>
					<option value={'April'}>April</option>
					<option value={'May'}>May</option>
					<option value={'June'}>June</option>
					<option value={'July'}>July</option>
					<option value={'August'}>August</option>
					<option value={'September'}>September</option>
					<option value={'October'}>October</option>
					<option value={'November'}>November</option>
					<option value={'December'}>December</option>
				</select>
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200'>
					<svg
						className='fill-current h-4 w-4'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'>
						<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
					</svg>
				</div>
			</div>
		</div>
	);
};

export default MonthSelect;
