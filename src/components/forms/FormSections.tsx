import FormComponent from './FormComponent.tsx';

const FormSections = ({
	personalInfo,
	inputValues,
	setInputValues,
	graduatedSchool,
	educationInfo,
	setPersonalInfo,
	setGraduatedSchool,
	setEducationInfo,
	workExperience,
	setWorkExperience,
	currentlyEmployed,
	setCurrentlyEmployed,
}: any): JSX.Element => {
	const personalInputChangeHandler = (inputName: string, value: string) =>
		setInputValues((prevValues: any) => ({
			...prevValues,
			[inputName]: value,
		}));

	const toggleGraduatedSchool = (index: number) => {
		const updatedGraduatedSchool = graduatedSchool.map(
			(checkboxValue: boolean, i: number) =>
				i === index ? !checkboxValue : checkboxValue
		);
		setGraduatedSchool(updatedGraduatedSchool);
	};

	const removeEducation = (index: number) => {
		const updatedEducationInfo = educationInfo.filter(
			(_: any, i: number) => i !== index
		);
		const updatedGraduatedSchool = graduatedSchool.filter(
			(_: any, i: number) => i !== index
		);
		setEducationInfo(updatedEducationInfo);
		setGraduatedSchool(updatedGraduatedSchool);
	};

	const addEducation = () => {
		const newSchool: any[] = [
			...educationInfo,
			{
				schoolName: '',
				degree: '',
				startMonth: '',
				startYear: '',
				endMonth: '',
				endYear: '',
			},
		];
		const toggle: boolean[] = [...graduatedSchool, true];
		setEducationInfo(newSchool);
		setGraduatedSchool(toggle);
	};

	const toggleCurrentlyEmployed = (index: number) => {
		const updatedCurrentlyEmployed = currentlyEmployed.map(
			(checkboxValue: boolean, i: number) =>
				i === index ? !checkboxValue : false
		);
		setCurrentlyEmployed(updatedCurrentlyEmployed);
	};

	const removeWorkExperience = (index: number) => {
		const updatedWorkExperience = workExperience.filter(
			(_: any, i: number) => i !== index
		);
		const updatedCurrentlyEmployed = currentlyEmployed.filter(
			(_: any, i: number) => i !== index
		);
		setWorkExperience(updatedWorkExperience);
		setCurrentlyEmployed(updatedCurrentlyEmployed);
	};

	const addWorkExperience = () => {
		const newWorkExperience: any[] = [
			...workExperience,
			{
				workplace: '',
				position: '',
				startMonth: '',
				startYear: '',
				endMonth: '',
				endYear: '',
				summary: '',
			},
		];
		const toggle: boolean[] = [...currentlyEmployed, false];
		setWorkExperience(newWorkExperience);
		setCurrentlyEmployed(toggle);
	};

	const handleButtonClick = (e: HTMLFormElement) => {
		e.preventDefault();

		const form = new FormData(e.currentTarget);
		const updatedPersonalInfo: any = {};

		for (let [key, value] of form.entries()) {
			if (!key.includes('Check')) updatedPersonalInfo[key] = value;
		}

		const updatedEducation: any[] = [];
		const updatedWorkExperience: any[] = [];

		setPersonalInfo({
			fullName: updatedPersonalInfo.person_fullName,
			emailAddress: updatedPersonalInfo.person_emailAddress,
			phoneNumber: updatedPersonalInfo.person_phoneNumber,
			location: updatedPersonalInfo.person_location,
		});

		let sectionLength: number =
			document
				.querySelector('#educationContainer')
				?.querySelectorAll('.section').length || 1;

		for (let i = 1; i <= sectionLength; i++) {
			updatedEducation.push({
				schoolName: updatedPersonalInfo[`edu_school_${i}`],
				degree: updatedPersonalInfo[`edu_degree_${i}`],
				startMonth: updatedPersonalInfo[`edu_startMonth_${i}`],
				startYear: updatedPersonalInfo[`edu_startYear_${i}`],
				endMonth: updatedPersonalInfo[`edu_endMonth_${i}`],
				endYear: updatedPersonalInfo[`edu_endYear_${i}`],
			});
		}

		sectionLength =
			document
				.querySelector('#experienceContainer')
				?.querySelectorAll('.section').length || 1;
		
		for (let i = 1; i <= sectionLength; i++) {
			updatedWorkExperience.push({
				workplace: updatedPersonalInfo[`exp_workplace_${i}`],
				position: updatedPersonalInfo[`exp_position_${i}`],
				startMonth: updatedPersonalInfo[`exp_startMonth_${i}`],
				startYear: updatedPersonalInfo[`exp_startYear_${i}`],
				endMonth: updatedPersonalInfo[`exp_endMonth_${i}`],
				endYear: updatedPersonalInfo[`exp_endYear_${i}`],
				summary: updatedPersonalInfo[`exp_summary_${i}`],
			});
		}

		setEducationInfo(updatedEducation);
		setWorkExperience(updatedWorkExperience);

		console.log('Content updated!');
	};

	return (
		<FormComponent
			personalInfo={personalInfo}
			inputValues={inputValues}
			setInputValues={setInputValues}
			graduatedSchool={graduatedSchool}
			educationInfo={educationInfo}
			setPersonalInfo={setPersonalInfo}
			setGraduatedSchool={setGraduatedSchool}
			setEducationInfo={setEducationInfo}
			workExperience={workExperience}
			setWorkExperience={setWorkExperience}
			currentlyEmployed={currentlyEmployed}
			setCurrentlyEmployed={setCurrentlyEmployed}
			personalInputChangeHandler={personalInputChangeHandler}
			handleButtonClick={handleButtonClick}
			addEducation={addEducation}
			addWorkExperience={addWorkExperience}
			removeWorkExperience={removeWorkExperience}
			removeEducation={removeEducation}
			toggleGraduatedSchool={toggleGraduatedSchool}
			toggleCurrentlyEmployed={toggleCurrentlyEmployed}
		/>
	);
};

export default FormSections;
