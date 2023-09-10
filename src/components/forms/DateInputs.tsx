import MonthSelect from './form-inputs/MonthSelect.tsx';
import YearInput from './form-inputs/YearInput.tsx';

const DateInputs = ({
	monthName,
	monthValue,
	yearName,
	yearValue,
}: any) => {
	return (
		<div className='flex'>
			<MonthSelect
                title={'Select a month'}
				name={monthName}
				value={monthValue}
			/>
            <YearInput
                name={yearName}
                label={'Year'}
                placeholder={'YYYY'}
                value={yearValue}
            />
		</div>
	);
};

export default DateInputs;