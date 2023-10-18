import { FormatNumber } from "../../../utils/others/contact-number-format.utils";

const MainProfileContactInformation: React.FC<{
	email: string;
	cell: string;
	phone: string;
}> = ({ email, cell, phone }) => {
	return (
		<>
			<div>
				<h2 className="text-lg mb-2 font-light">Contact Information</h2>

				<div className="grid grid-cols-2 max-md:grid-cols-1 mb-2">
					<ul className="grid gap-y-2 leading-8">
						<li>
							<p className="text-blue-500 text-sm">Phone Number</p>
							<p>{FormatNumber(phone)}</p>
						</li>
						<li>
							<p className="text-blue-500 text-sm">Tele Phone Number</p>
							<p>{FormatNumber(cell)}</p>
						</li>
					</ul>
					<ul className="grid gap-y-2 leading-8 col-span-1">
						<li>
							<p className="text-blue-500 text-sm">Email Address</p>
							<p>{email}</p>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default MainProfileContactInformation;
