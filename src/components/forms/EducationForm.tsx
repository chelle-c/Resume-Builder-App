import GeneralInput from './form-inputs/GeneralInput.tsx';
import Check from './form-inputs/Check.tsx';
import DateInputs from './DateInputs.tsx';

const EducationForm = ({
	index,
	schoolName,
	degree,
	startMonth,
	startYear,
	endMonth,
	endYear,
	removeEducation,
	graduatedSchool,
	toggleGraduatedSchool,
}: any) => {
	const handleCheckboxChange = () => {
		toggleGraduatedSchool(index);
	};

	const handleRemovebutton = () => {
		removeEducation(index);
	};

	return (
		<section className='section mt-6'>
			<h2 className='text-xl text-left font-semibold my-6 text-gray-900 dark:text-gray-200'>
				School #{index + 1}
			</h2>
			<GeneralInput
				name={`edu_school_${index + 1}`}
				label={'University / College / High School'}
				placeholder={'Name of school attended'}
				value={schoolName}
			/>
			<GeneralInput
				name={`edu_degree_${index + 1}`}
				label={'Area of study / Degree (Leave blank if none)'}
				placeholder={'Ex. Bachelor in Computer Science'}
				value={degree}
			/>
			<Check
				title='Graduated'
				name={`edu_graduated_${index + 1}`}
				label={`I've graduated from this school`}
				checked={graduatedSchool}
				handleCheckboxChange={handleCheckboxChange}
			/>
			<h6 className='text-lg text-left my-1 font-semibold text-gray-900 dark:text-gray-200'>
				Start Date
			</h6>
			<DateInputs
				monthName={`edu_startMonth_${index + 1}`}
				monthValue={startMonth}
				yearName={`edu_startYear_${index + 1}`}
				yearValue={startYear}
			/>
			{graduatedSchool && (
				<>
					<h6 className='text-lg text-left my-1 font-semibold text-gray-900 dark:text-gray-200'>
						End Date
					</h6>
					<DateInputs
						monthName={`edu_endMonth_${index + 1}`}
						monthValue={endMonth}
						yearName={`edu_endYear_${index + 1}`}
						yearValue={endYear}
					/>
				</>
			)}
			{index > 0 && (
				<button
					className='w-full my-3 px-5 py-3 text-base font-semibold text-center text-white rounded-lg shadow-lgfocus:outline-none bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-700'
					type='button'
					onClick={handleRemovebutton}>
					Remove school #{index + 1}
				</button>
			)}
		</section>
	);
};

export default EducationForm;
