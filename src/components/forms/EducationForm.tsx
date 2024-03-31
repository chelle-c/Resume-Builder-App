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
		<section className='mt-6 section'>
			<h2 className='my-6 text-xl font-semibold text-left text-gray-900 dark:text-gray-200'>
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
			<h6 className='my-1 text-lg font-semibold text-left text-gray-900 dark:text-gray-200'>
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
					<h6 className='my-1 text-lg font-semibold text-left text-gray-900 dark:text-gray-200'>
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
					className='w-full px-5 py-3 my-3 mb-2 text-base font-semibold text-center text-white rounded-lg bg-gradient-to-r from-red-400 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 me-2'
					type='button'
					onClick={handleRemovebutton}>
					Remove school #{index + 1}
				</button>
			)}
		</section>
	);
};

export default EducationForm;
