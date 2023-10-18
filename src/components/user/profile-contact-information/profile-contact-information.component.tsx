import { FormatNumber } from "../../../utils/others/contact-number-format.utils";

interface ContactInformation {
	email: string;
	phone: string;
	cell: string;
}

const ProfileContactInformation: React.FC<{ info: ContactInformation }> = ({ info }) => {
	const { email, phone, cell } = info;
	return (
		<>
			<div className="grid grid-cols-11 gap-1 items-center gap-y-3 dark:text-white">
				<div className="col-span-1">
					<img
						className="w-5"
						src="/images/icons/email.svg"
						alt=""
					/>
				</div>
				<div className="col-span-10">
					<p
						className="text-sm truncate "
						title={email}>
						{email}
					</p>
				</div>
				<div className="col-span-1">
					<img
						className="w-5"
						src="/images/icons/mobile.svg"
						alt=""
					/>
				</div>
				<div className="col-span-10">
					<p className="text-sm">{FormatNumber(phone)}</p>
				</div>
				<div className="col-span-1">
					<img
						className="w-5"
						src="/images/icons/telephone.svg"
						alt=""
					/>
				</div>
				<div className="col-span-10">
					<p className="text-sm">{FormatNumber(cell)}</p>
				</div>
			</div>
		</>
	);
};

export default ProfileContactInformation;
