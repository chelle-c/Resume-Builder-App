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

export type { PersonalInfo, EducationInfo, WorkExperience, AppProps }