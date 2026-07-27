export interface Position {
	companyName: string;
	companyWebsite?: string;
	title: string;
	endDate?: Date;
	startDate: Date;
	location: 'On-site' | 'Hybrid' | 'Remote';
	responsibilities: string[];
}

const experience: Position[] = [
	{
		companyName: 'Cognitronix',
		companyWebsite: 'https://cognitronixai.com/',
		title: 'Software Development Lead',
		startDate: new Date('2025-09'),
		location: 'Hybrid',
		responsibilities: [
			'Lead technical implementation of web applications built on Svelte, Node.js, and Python/FastAPI, overseeing deployment and integration of in-house and third-party AI models into production from the ground up.',
			'Define and maintain code standards, system architecture, and git workflow for the engineering team, establishing practices from the earliest stage of the product.',
			'Conduct meetings with the CTO and business stakeholders to gather requirements and translate business needs into concrete technical implementation plans.',
			'Built infrastructure and CI/CD pipelines from scratch, taking our products from concept to first production release.',
			'Manage a cross-functional team of frontend, backend, and AI engineers, owning how AI models are integrated into live web applications while the CTO oversees the AI engineering work itself.',
			'Operate as a hybrid Software Development Lead and Staff Engineer, splitting time between hands-on implementation and architectural leadership.',
		],
	},
	{
		companyName: 'VOIS',
		companyWebsite: 'https://www.voiscentre.com/',
		title: 'Software Development Lead',
		endDate: new Date('2025-08'),
		startDate: new Date('2025-04'),
		location: 'Hybrid',
		responsibilities: [
			'Supervise technical implementation across all squads.',
			'Mentor team members.',
			'Coordinate and communicate with other leads.',
			'Lead technical initiative to modernize tool-chains used in our products.',
			'Implement features that require deep knowledge, or during tight deadlines.',
		],
	},
	{
		companyName: 'Lumofy',
		companyWebsite: 'https://www.lumofy.ai/',
		title: 'Front-End Lead',
		endDate: new Date('2025-03'),
		startDate: new Date('2023-12'),
		location: 'Remote',
		responsibilities: [
			'Review and enhance coding standards and guidelines.',
			'Review and enhance architecture in all front-end applications.',
			'Review and enhance software development process.',
			'Refine business requirements with the product team.',
			'Supervise all the front-end team members, ensuring that they’re following our processes and standards.',
			'Guide the front-end developers on progressing their careers, and providing monthly feedback to them, and quarterly review to the Project Lead.',
			'Mentor the senior front-end developers on mentoring the rest of the team.',
			'Implement features that require deep knowledge, or during tight deadlines.',
		],
	},
	{
		companyName: 'Kemet',
		companyWebsite: 'https://www.kemettrading.com/',
		title: 'Senior Front-End Engineer',
		endDate: new Date('2023-09'),
		startDate: new Date('2023-05'),
		location: 'Remote',
		responsibilities: [
			'Develop new user-facing features.',
			'Optimize application for maximum speed and scalability.',
			'Collaborate with other team members and stakeholders.',
			'Participating in code reviews and testing new features to ensure they are compatible with existing features.',
			'Identify areas that could be enhanced or refactored to keep code base up to date, or increase maintainability.',
			'Review code and provide feedback according to our code standards.',
			'Work closely with the CPO to define valuable features with high quality and pleasant experience.',
			'Report to the Head of engineering.',
		],
	},
	{
		companyName: 'Axis',
		companyWebsite: 'https://axisapp.com',
		title: 'Front-End Lead',
		endDate: new Date('2023-04'),
		startDate: new Date('2022-01'),
		location: 'Hybrid',
		responsibilities: [
			'Review and enhance coding standards and guidelines.',
			'Review and enhance architecture in all front-end applications.',
			'Review and enhance software development process.',
			'Refine business requirements with the product team.',
			'Supervise all the front-end squads, ensuring that they’re following our processes and standards.',
			'Guide the front-end developers on progressing their careers, and providing monthly feedback to them, and quarterly review to the CTO.',
			'Mentor the senior front-end developers on mentoring the rest of the team.',
			'Implement features that require deep knowledge, or during tight deadlines.',
		],
	},
	{
		companyName: 'IoT Blue',
		companyWebsite: 'https://www.iotblue.com/',
		title: 'Head of Research and Development',
		endDate: new Date('2021-12'),
		startDate: new Date('2020-03'),
		location: 'Hybrid',
		responsibilities: [
			'Identify possible underserved technical or user problems',
			'Design and develop a prototype to solve the identified problems.',
			'Prepare, manage, and execute internship programs.',
			'Identify and start possible partnerships with research or educational institutes.',
			'Build and maintain open-source projects.',
			'Report to the CTO.',
		],
	},
	{
		companyName: 'IoT Blue',
		companyWebsite: 'https://www.iotblue.com/',
		title: 'Team Lead',
		endDate: new Date('2020-03'),
		startDate: new Date('2018-07'),
		location: 'Hybrid',
		responsibilities: [
			'Lead our Operations team to build end-user IoT applications using our IoT Platform “Cervello”.',
			'Contribute the codebase of our solutions through the whole stack.',
			'Work closely with the customer to identify and prioritize requirements.',
			'Set goals and KPIs to ensure the delivery of the requirements in a time-managed plan.',
			'Work with other experienced engineers to create a clear learning plan for all technical levels across the whole company.',
			'Supervise and report the engineers’ progress according to the learning plan – each to their lead/manager.',
			'Report to the head of engineering.',
		],
	},
	{
		companyName: 'IoT Blue',
		companyWebsite: 'https://www.iotblue.com/',
		title: 'Senior Front-End Engineer',
		endDate: new Date('2018-07'),
		startDate: new Date('2016-09'),
		location: 'On-site',
		responsibilities: [
			'Build front-end solution using latest technologies.',
			'Set code guidelines and standards.',
			'Design and implement an architecture for our front-end web apps to ensure a smooth and agile development process.',
			'Review code and provide feedback according to our code standards.',
			'Mentor mid-level and junior front-end engineers across the company.',
			'Work closely with the sales team, business analyst, and project manager to define valuable features with high quality and pleasant experience.',
			'Contribute with other team members to build the product that satisfies our business, UX, and technical requirements.',
			'Report to the Head of engineering.',
		],
	},
	{
		companyName: 'Sooft',
		companyWebsite: 'https://sooft.es/',
		title: 'Full-stack Engineer',
		endDate: new Date('2016-08'),
		startDate: new Date('2015-09'),
		location: 'On-site',
		responsibilities: [
			'Develop scalable and secure web applications, including adding or updating features according to the business requirements, and triaging, reproducing, and fixing bugs.',
			'Design and develop SQL and NoSQL databases, according to the technical requirements.',
			'Contribute to sprint planning by accepting and estimating available tasks.',
			'Work closely with the sales team to define the best solution to the user problems.',
			'Report to the CEO and the CTO.',
		],
	},
];

export default experience;
