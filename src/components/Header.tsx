import Check from './forms/form-inputs/Check.tsx';

const Header = ({ darkMode, toggleDarkMode }: any): JSX.Element => {
	return (
		<header className='container flex items-center justify-between max-w-full px-24 py-8 mb-6 bg-gray-800'>
			<div className='w-full'></div>
			<div className='w-full align-middle'>
				<h1 className='font-semibold leading-none tracking-tight md:text-5xl lg:text-4xl text-zinc-50 whitespace-nowrap'>
					Resume Builder
				</h1>
			</div>
			<div className='flex flex-row items-center justify-center w-full'>
				<Check
					title='Change light/dark mode'
					name='themeChange'
					label={`${!darkMode ? 'Dark' : 'Light'} theme`}
					checked={darkMode}
					handleCheckboxChange={toggleDarkMode}
				/>
			</div>
		</header>
	);
};

export default Header;
