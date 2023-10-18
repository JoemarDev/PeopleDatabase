import { FormatDate } from "../../../utils/others/date-formatter.utils";
import { DateOfBirth, Location, Registered } from "../../../utils/types/user/User.type";

const MainProfileBasicInfo: React.FC<{ dob: DateOfBirth; registered: Registered; location: Location }> = ({
	dob,
	registered,
	location,
}) => {
	const { date, age } = registered;
	const { date: birthday, age: userAge } = dob;
	const { street, city, country, state } = location;
	const { number: streetNumber, name: streetName } = street;
	return (
		<div>
			<h2 className="text-lg mb-2 font-light">Basic Information</h2>

			<div className="grid grid-cols-2 max-md:grid-cols-1 mb-2">
				<ul className="grid gap-y-2 leading-8">
					<li>
						<p className="text-blue-500 text-sm">Date of registration</p>
						<p>{FormatDate(date.toString())}</p>
					</li>
					<li>
						<p className="text-blue-500 text-sm">Account Old</p>
						<p>{age} Years old</p>
					</li>
				</ul>
				<ul className="grid gap-y-2 leading-8">
					<li>
						<p className="text-blue-500 text-sm">Birth Day</p>
						<p>{FormatDate(birthday.toString())}</p>
					</li>
					<li>
						<p className="text-blue-500 text-sm">Age</p>
						<p>{userAge} Years old</p>
					</li>
				</ul>
			</div>
			<div className="grid grid-cols-1">
				<ul className="grid gap-y-2 leading-8">
					<li>
						<p className="text-blue-500 text-sm">Address</p>
						<p>
							{country} {state} {city} {streetName} {streetNumber}
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MainProfileBasicInfo;
