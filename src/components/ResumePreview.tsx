const ResumePreview = ({
	personalInfo,
	educationInfo,
	workExperience,
	graduatedSchool,
	currentlyEmployed,
}: any): JSX.Element => {
	const { fullName, title, emailAddress, phoneNumber, location } =
		personalInfo;

	return (
		<div
			id='resumePreview'
			className='rounded-md resume-container drop-shadow-xl'>
			<div className='resume--header rounded-to-md'>
				<div className='w-full'>
					<h1 className='text-4xl font-bold leading-none tracking-tight text-left md:text-5xl lg:text-6xl whitespace-nowrap'>
						{fullName}
					</h1>
					<p className='text-left text-md'>{title}</p>
				</div>
				<div>
					<div className='flex flex-col items-start whitespace-nowrap'>
						<div className='flex items-center justify-between'>
							<svg
								className='w-4 h-4 mr-2 text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 16'>
								<path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
								<path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
							</svg>
							<span>{emailAddress}</span>
						</div>
						<div className='flex items-center justify-between'>
							<svg
								className='w-4 h-4 mr-2 text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 19 18'>
								<path d='M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z' />
							</svg>
							<span>{phoneNumber}</span>
						</div>
						<div className='flex items-center justify-between'>
							<svg
								className='w-4 h-4 mr-2 text-white'
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 16 20'>
								<path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
							</svg>
							<span>{location}</span>
						</div>
					</div>
				</div>
			</div>
			<div className='resume--sections'>
				<h5 className='resume-section_title'>Education</h5>
				{educationInfo?.map((item: any, index: number) => (
					<div
						key={`education-${index}`}
						className='mb-4 text-sm resume-section'>
						{item.schoolName != '' && (
							<div key={`school-${index}`}>
								<strong>{item.schoolName}</strong>
							</div>
						)}
						{item.degree != '' && (
							<div key={`degree-${index}`}>{item.degree}</div>
						)}
						{item.startYear != '' && (
							<div key={`eduDate-${index}`}>
								{item.startMonth} {item.startYear}
								{item.endYear != ''
									? graduatedSchool[index]
										? ` - ${item.endMonth} ${item.endYear}`
										: ' - Present'
									: null}
							</div>
						)}
					</div>
				))}
				<h5 className='resume-section_title'>Work Experience</h5>
				{workExperience.map((item: any, index: number) => (
					<div
						key={`workExperience-${index}`}
						className='mb-4 text-sm resume-section'>
						{item.workplace != '' && (
							<div key={`workCompany-${index}`}>
								<strong>{item.workplace}</strong>
							</div>
						)}
						{item.position != '' && (
							<div key={`workPosition-${index}`}>
								{item.position}
							</div>
						)}
						{item.startYear != '' && (
							<div key={`workDate-${index}`}>
								{item.startMonth} {item.startYear}
								{currentlyEmployed[index]
									? ' - Present'
									: ` - ${item.endMonth} ${item.endYear}`}
							</div>
						)}
						{item.summary != '' && (
							<div
								key={`workSummary-${index}`}
								className='whitespace-pre-wrap'>
								<ul className='ml-8 list-disc'>
									{item.summary
										.split('\n')
										.map(
											(
												line: string,
												listIndex: number
											) => (
												<li
													key={`workExperience-${index}-li-${listIndex}`}>
													{line}
												</li>
											)
										)}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default ResumePreview;
