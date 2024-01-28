type InputProp = {
	title?: string;
};

const Title = ({ title = "Acumulado Grilla" }: InputProp) => {
	return (
		<div className="row">
			<div className="com-titleWithfollow hlp-marginBottom-15">
				<h1 className="com-title-section-xl hlp-marginBottom-40">{title}</h1>
			</div>
		</div>
	);
};

export default Title;
