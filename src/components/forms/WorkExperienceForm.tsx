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
		<section className='section mt-6'>
			<h2 className='text-xl text-left font-semibold my-6 text-gray-900 dark:text-gray-200'>
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
			<h6 className='text-lg text-left my-1 font-semibold text-gray-900 dark:text-gray-200'>
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
					<h6 className='text-lg text-left my-1 font-semibold text-gray-900 dark:text-gray-200'>
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
					className='w-full my-3 px-5 py-3 text-base font-semibold text-center text-white rounded-lg shadow-lgfocus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-700'
					type='button'
					onClick={handleRemovebutton}>
					Remove work experience #{index + 1}
				</button>
			)}
		</section>
	);
};

export default WorkExperienceForm;
