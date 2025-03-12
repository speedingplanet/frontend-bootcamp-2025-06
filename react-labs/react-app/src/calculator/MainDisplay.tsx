interface MainDisplayProps {
	content?: string;
}

function MainDisplay({ content }: MainDisplayProps) {
	return <span>{content || 'Main display'}</span>;
}

export default MainDisplay;
