interface MainProfileHeaderProps {
	close: () => void;
}

const MainProfileHeader: React.FC<MainProfileHeaderProps> = ({ close }) => {
	return (
		<div className="flex items-center justify-between max-sm:mb-5">
			<div className="flex items-center gap-2 ">
				<img
					className="w-24 max-sm:w-16"
					src="/images/brand/logo.png"
					alt=""
				/>
				<h2 className="text-2xl font-semibold leading-6">
					<span className="text-blue-500">People</span> <br />
					<span className="brand-stroke">Database</span>
				</h2>
			</div>
			<button onClick={close}>
				<img
					className="w-12"
					src="/images/icons/close.svg"
					alt="close"
				/>
			</button>
		</div>
	);
};

export default MainProfileHeader;
