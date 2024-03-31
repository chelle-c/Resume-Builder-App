const Header = (): JSX.Element => {
	return (
		<header className='container flex items-center justify-between max-w-full px-24 py-8 mb-6 bg-gray-800'>
			<div className='w-full align-middle'>
				<h1 className='font-semibold leading-none tracking-tight md:text-5xl lg:text-4xl text-zinc-50 whitespace-nowrap'>
					Resume Builder
				</h1>
			</div>
		</header>
	);
};

export default Header;
