import GeneralInput from './form-inputs/GeneralInput.tsx';
import Check from './form-inputs/Check.tsx';
import DateInputs from './DateInputs.tsx';
import TextArea from './form-inputs/TextArea.tsx';

const WorkExperienceForm = ({
	index,
	workplace,
	position,
	startMonth,
	startYear,
	endMonth,
	endYear,
	summary,
	removeWorkExperience,
	currentlyEmployed,
	toggleCurrentlyEmployed,
}: any) => {
	const handleCheckboxChange = () => {
		toggleCurrentlyEmployed(index);
	};

	const handleRemovebutton = () => {
		removeWorkExperience(index);
	};

	return (
		<section className='mt-6 section'>
			<h2 className='my-6 text-xl font-semibold text-left text-gray-900 dark:text-gray-200'>
				Workplace #{index + 1}
			</h2>
			<GeneralInput
				name={`exp_workplace_${index + 1}`}
				label={'Organization Name'}
				placeholder={'Ex. Google'}
				value={workplace}
			/>
			<GeneralInput
				name={`exp_position_${index + 1}`}
				label={'Title'}
				placeholder={'Ex. Software Engineer'}
				value={position}
			/>
			<Check
				title='CurrentlyEmployed'
				name={`exp_currentlyEmployed_${index + 1}`}
				label={`I currently work here`}
				checked={currentlyEmployed}
				handleCheckboxChange={handleCheckboxChange}
			/>
			<h6 className='my-1 text-lg font-semibold text-left text-gray-900 dark:text-gray-200'>
				Start Date
			</h6>
			<DateInputs
				monthName={`exp_startMonth_${index + 1}`}
				monthValue={startMonth}
				yearName={`exp_startYear_${index + 1}`}
				yearValue={startYear}
			/>
			{!currentlyEmployed && (
				<>
					<h6 className='my-1 text-lg font-semibold text-left text-gray-900 dark:text-gray-200'>
						End Date
					</h6>
					<DateInputs
						monthName={`exp_endMonth_${index + 1}`}
						monthValue={endMonth}
						yearName={`exp_endYear_${index + 1}`}
						yearValue={endYear}
					/>
				</>
			)}
			<TextArea
				name={`exp_summary_${index + 1}`}
				label={'Responsibilities'}
				placeholder={'Ex. Developed a new web application'}
				value={summary}
			/>
			{index > 0 && (
				<button
					className='w-full px-5 py-3 my-3 mb-2 text-base font-semibold text-center text-white rounded-lg bg-gradient-to-r from-red-400 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 me-2'
					type='button'
					onClick={handleRemovebutton}>
					Remove work experience #{index + 1}
				</button>
			)}
		</section>
	);
};

export default WorkExperienceForm;
