import GeneralInput from './form-inputs/GeneralInput.tsx';
import EducationForm from './EducationForm.tsx';
import WorkExperienceForm from './WorkExperienceForm.tsx';

const FormComponent = ({
	personalInfo,
	graduatedSchool,
	educationInfo,
	workExperience,
	currentlyEmployed,
	removeEducation,
	toggleGraduatedSchool,
	toggleCurrentlyEmployed,
	addEducation,
	addWorkExperience,
	removeWorkExperience,
	handleSubmit,
}: any): JSX.Element => {
	return (
		<form
			className='items-center w-full max-w-full m-0 mr-6 container--form'
			onSubmit={handleSubmit}>
			<>
				<div
					id='personalInfoContainer'
					className='rounded shadow-lg container--section'>
					<button
						className='flex flex-row items-center justify-between w-full p-6 text-left text-gray-900 dark:text-gray-200'
						type='button'
						onClick={e => {
							e.currentTarget.parentElement?.classList.toggle(
								'container--section-closed'
							);
							e.currentTarget.nextElementSibling?.classList.toggle(
								'container--section-form-closed'
							);
							e.currentTarget.children[1].classList.toggle(
								'container--section__arrow-flip'
							);
						}}>
						<h3 className='text-2xl text-left text-gray-900 dark:text-gray-200'>
							Personal Information
						</h3>
						<svg
							className='w-5 h-5 fill-current container--section__arrow'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</button>
					<div className='flex-col max-w-lg mb-1 overflow-hidden container--section-form min-w-sm'>
						<GeneralInput
							name={'person_fullName'}
							label={'Full name'}
							placeholder={'Enter first and last name'}
							value={personalInfo.fullName}
						/>
						<GeneralInput
							name={'person_emailAddress'}
							label={'Email address'}
							placeholder={'name@example.com'}
							value={personalInfo.emailAddress}
						/>
						<GeneralInput
							name={'person_phoneNumber'}
							label={'Phone number'}
							placeholder={'(123) 456-7890'}
							type={'text'}
							value={personalInfo.phoneNumber}
						/>
						<GeneralInput
							name={'person_location'}
							label={'Address'}
							placeholder={
								'City, State/Province, ZIP/Postal code'
							}
							value={personalInfo.location}
						/>
					</div>
				</div>
				<div
					id='educationContainer'
					className='rounded shadow-lg container--section'>
					<button
						className='flex flex-row items-center justify-between w-full p-6 text-left text-gray-900 dark:text-gray-200'
						type='button'
						onClick={e => {
							e.currentTarget.parentElement?.classList.toggle(
								'container--section-closed'
							);
							e.currentTarget.nextElementSibling?.classList.toggle(
								'container--section-form-closed'
							);
							e.currentTarget.children[1].classList.toggle(
								'container--section__arrow-flip'
							);
						}}>
						<h3 className='text-2xl text-left text-gray-900 dark:text-gray-200'>
							Education
						</h3>
						<svg
							className='w-5 h-5 fill-current container--section__arrow'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</button>
					<div className='flex-col max-w-lg mb-1 overflow-hidden container--section-form min-w-sm'>
						<div className='divide-y'>
							{educationInfo.map(
								(education: any, index: number) => (
									<EducationForm
										key={`education_${index}`}
										index={index}
										schoolName={education.schoolName}
										degree={education.degree}
										startMonth={education.startMonth}
										startYear={education.startYear}
										endMonth={education.endMonth}
										endYear={education.endYear}
										removeEducation={removeEducation}
										graduatedSchool={graduatedSchool[index]}
										toggleGraduatedSchool={
											toggleGraduatedSchool
										}
									/>
								)
							)}
						</div>
						<button
							className='w-full px-5 py-3 my-3 mb-2 text-base font-semibold text-center text-white rounded-lg bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 me-2'
							type='button'
							onClick={addEducation}>
							Add another school
						</button>
					</div>
				</div>
				<div
					id='experienceContainer'
					className='rounded shadow-lg container--section'>
					<button
						className='flex flex-row items-center justify-between w-full p-6 text-left text-gray-900 dark:text-gray-200'
						type='button'
						onClick={e => {
							e.currentTarget.parentElement?.classList.toggle(
								'container--section-closed'
							);
							e.currentTarget.nextElementSibling?.classList.toggle(
								'container--section-form-closed'
							);
							e.currentTarget.children[1].classList.toggle(
								'container--section__arrow-flip'
							);
						}}>
						<h3 className='text-2xl text-left text-gray-900 dark:text-gray-200'>
							Work Experience
						</h3>
						<svg
							className='w-5 h-5 fill-current container--section__arrow'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</button>
					<div className='flex-col max-w-lg mb-1 overflow-hidden container--section-form min-w-sm'>
						<div className='divide-y'>
							{workExperience.map(
								(workExperience: any, index: number) => (
									<WorkExperienceForm
										key={`workExperience_${index}`}
										index={index}
										workplace={workExperience.workplace}
										position={workExperience.position}
										startMonth={workExperience.startMonth}
										startYear={workExperience.startYear}
										endMonth={workExperience.endMonth}
										endYear={workExperience.endYear}
										summary={workExperience.summary}
										removeWorkExperience={
											removeWorkExperience
										}
										currentlyEmployed={
											currentlyEmployed[index]
										}
										toggleCurrentlyEmployed={
											toggleCurrentlyEmployed
										}
									/>
								)
							)}
						</div>
						<button
							className='w-full px-5 py-3 my-3 mb-2 text-base font-semibold text-center text-white rounded-lg bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 me-2'
							type='button'
							onClick={addWorkExperience}>
							Add another work experience
						</button>
					</div>
				</div>
			</>
			<div className='w-full mt-3 mb-6 text-gray-900 dark:text-gray-200'>
				<button
					className='w-full px-5 py-3 mb-2 text-base font-semibold text-center text-white bg-blue-700 rounded-lg shadow-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 me-2'
					type='submit'>
					Update resume
				</button>
			</div>
		</form>
	);
};

export default FormComponent;
