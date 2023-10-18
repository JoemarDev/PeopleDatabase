import FooterBrand from "../footer-brand/footer-brand.component";
import FooterCredits from "../footer-credits/footer-credits.component";
import FooterDescription from "../footer-description/footer-description.component";
import FooterLink from "../footer-link/footer-link.component";
import FooterSocmed from "../footer-socmed/footer-socmed.component";

const FooterBody = () => {
	return (
		<>
			<div className="w-full bg-white  py-20 pb-10 shadow-lg  dark:bg-sky-950 dark:border-blue-600 border-t-2">
				<div className="container mx-auto flex items-center justify-center h-full">
					<div
						className="text-center px-5"
						style={{ maxWidth: "500px" }}>
						<FooterBrand />
						<FooterDescription />
						<FooterSocmed />
						<FooterLink />
					</div>
				</div>
			</div>
			<FooterCredits />
		</>
	);
};

export default FooterBody;
