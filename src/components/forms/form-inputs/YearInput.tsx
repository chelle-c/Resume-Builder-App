import GeneralInput from './GeneralInput.tsx';

const YearInput = ({
	name = '',
	label = 'Label is empty',
	placeholder = 'Placeholder is empty',
	value,
}: any) => {
	return (
		<GeneralInput
			name={name}
			label={label}
            placeholder={placeholder}
			type={'text'}
			maxLength={4}
            pattern={'[0-9]{4}'}
			value={value}
			onChange={(e: any) => {
				const value = e.target.value;
				e.target.value = value.replace(/[A-Za-z]/g, '');
			}}
		/>
	);
};

export default YearInput;
