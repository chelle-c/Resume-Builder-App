import { useState } from 'react';
import Header from './components/Header.tsx';
import FormSections from './components/forms/FormSections.tsx';
import ResumePreview from './components/ResumePreview.tsx';
import './styles/App.scss';

type PersonalInfo = {
	fullName: string;
	emailAddress: string;
	phoneNumber: string;
	location: string;
};

type EducationInfo = {
	schoolName: string;
	degree: string;
	startMonth: string;
	startYear: string;
	endMonth: string;
	endYear: string;
};

type WorkExperience = {
	workplace: string;
	position: string;
	startMonth: string;
	startYear: string;
	endMonth: string;
	endYear: string;
	summary: string;
};

type AppProps = {};

const App = ({}: AppProps): JSX.Element => {
	const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
		fullName: 'Jane Doe',
		emailAddress: 'janedoe@email.com',
		phoneNumber: '(123) 456-7890',
		location: 'Toronto, ON, Canada',
	});
	const [educationInfo, setEducationInfo] = useState<EducationInfo[]>([
		{
			schoolName: 'Anytown University',
			degree: 'Bachelor of Science in Computer Science',
			startMonth: 'January',
			startYear: '2020',
			endMonth: 'December',
			endYear: '2022',
		},
	]);
	const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
		{
			workplace: 'XYZ Tech Solutions',
			position: 'Web Developer',
			startMonth: 'January',
			startYear: '2020',
			endMonth: 'August',
			endYear: '2023',
			summary:
				'Designed and developed responsive web applications using HTML, CSS, and JavaScript.\r\nCollaborated with cross-functional teams to gather project requirements and ensure timely delivery.\r\nImplemented user authentication and security features, enhancing website protection.\r\nConducted code reviews and provided mentorship to junior developers.',
		},
		{
			workplace: 'ABC Web Design Studio',
			position: 'Front-End Developer Intern',
			startMonth: 'May',
			startYear: '2019',
			endMonth: 'August',
			endYear: '2019',
			summary:
				'Assisted in creating and optimizing website layouts for clients using Bootstrap and CSS.\r\nCollaborated with designers to ensure pixel-perfect design implementation.\r\nConducted A/B testing to improve user experience and website performance.\r\nParticipated in daily stand-up meetings and learned agile development practices.',
		},
	]);
	const [graduatedSchool, setGraduatedSchool] = useState<boolean[]>([true]);
	const [currentlyEmployed, setCurrentlyEmployed] = useState<boolean[]>([
		true,
		false,
	]);

	return (
		<div
			className={`container max-w-full pb-10 bg-gray-700`}>
			<Header />
			<div className='mx-auto container--app'>
				<div className='flex flex-col justify-center max-w-full px-6 mx-auto xl:flex-row'>
					<FormSections
						personalInfo={personalInfo}
						graduatedSchool={graduatedSchool}
						educationInfo={educationInfo}
						setPersonalInfo={setPersonalInfo}
						setGraduatedSchool={setGraduatedSchool}
						setEducationInfo={setEducationInfo}
						workExperience={workExperience}
						setWorkExperience={setWorkExperience}
						currentlyEmployed={currentlyEmployed}
						setCurrentlyEmployed={setCurrentlyEmployed}
					/>
					<ResumePreview
						personalInfo={personalInfo}
						educationInfo={educationInfo}
						workExperience={workExperience}
						graduatedSchool={graduatedSchool}
						currentlyEmployed={currentlyEmployed}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
