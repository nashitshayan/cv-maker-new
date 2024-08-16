import { useState, useEffect } from 'react';
import EditableCV from './EditCV/EditableCV';
import PreviewCV from './DisplayCV/PreviewCV';
import '../css/App.css';

const initialHeaderData = { name: '', title: '' };

const initialPersonalData = {
	gender: '',
	dateOfBirth: '',
	phone: '',
	email: '',
	website: '',
	location: '',
};
const initialSkillsData = [
	{
		title: '',
		skills: [
			{
				skillName: '',
			},
		],
	},
];

const initialObjectiveData = {
	summary: '',
};

const initialEducationData = [
	{
		institute: '',
		course: '',
		startDate: '',
		endDate: '',
		isCurrentlyStudying: false,
		result: '',
	},
];

const initialExperienceData = [
	{
		company: '',
		title: '',
		startDate: '',
		endDate: '',
		isCurrentlyWorking: false,
		summary: '',
	},
];

const initialProjectData = [
	{
		title: '',
		startDate: '',
		endDate: '',
		isCurrentlyWorking: false,
		summary: '',
	},
];

function Home() {
	//get isEdit from localstorage, if not available then set initial value
	const getInitialIsEdit = () => {
		const isEditFromLocalStorage = JSON.parse(localStorage.getItem('isEdit'));
		return isEditFromLocalStorage !== null ? isEditFromLocalStorage : true;
	};

	// setting initial states
	const [headerData, setHeaderData] = useState(initialHeaderData);

	const [personalData, setPersonalData] = useState(initialPersonalData);

	const [skillsData, setSkillsData] = useState(initialSkillsData);

	const [objectiveData, setObjectiveData] = useState(initialObjectiveData);

	const [educationData, setEducationData] = useState(initialEducationData);

	const [experienceData, setExperienceData] = useState(initialExperienceData);

	const [projectData, setProjectData] = useState(initialProjectData);
	const [isEdit, setIsEdit] = useState(getInitialIsEdit);

	// Handling Header Data
	const onHeaderDataChange = (e) => {
		let { name, value } = e.target;
		setHeaderData((_) => ({ ..._, [name]: value }));
	};

	//Handling Personal Data
	const onPersonalDataChange = (e) => {
		let { name, value } = e.target;
		setPersonalData((_) => ({ ..._, [name]: value }));
	};

	//handling skillsData
	const onSkillsDataChange = (e, outerIndex, innerIndex) => {
		let { name, value, className } = e.target;
		let property = className === 'skills' ? className : name;
		setSkillsData((_) => {
			const newSkillsData = _.map((_, i) => {
				if (i === outerIndex) {
					return {
						..._,
						[property]:
							className === 'skills'
								? _.skills.map((_, j) => {
										if (j === innerIndex) {
											return { ..._, [name]: value };
										}
										return _;
								  })
								: value,
					};
				}
				return _;
			});
			return newSkillsData;
		});
	};

	const addSkillCategory = () => {
		setSkillsData((_) => [
			..._,
			{
				title: '',
				skills: [
					{
						skillName: '',
					},
				],
			},
		]);
	};

	const deleteSkillCategory = (e, i) => {
		setSkillsData((_) => _.filter((_, j) => j !== i));
	};

	const addSkill = (e, index) => {
		setSkillsData((_) =>
			_.map((_, i) => {
				if (i === index)
					return {
						..._,
						skills: [
							..._.skills,
							{
								skillName: '',
							},
						],
					};
				return _;
			}),
		);
	};

	const deleteSkill = (e, outerIndex, innerIndex) => {
		setSkillsData((_) => {
			const newSkillsData = _.map((_, i) => {
				if (i === outerIndex)
					return {
						..._,
						skills: _.skills.filter((_, j) => innerIndex !== j),
					};
				return _;
			});
			return newSkillsData;
		});
	};

	// handling objective data
	const onObjectiveDataChange = (e) => {
		let { value } = e.target;
		setObjectiveData({ summary: value });
	};

	const onEducationDataChange = (e, index) => {
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		setEducationData((_) =>
			_.map((_, i) => {
				if (i === index) return { ..._, [name]: value };
				return _;
			}),
		);
	};

	const addEducation = () => {
		setEducationData((_) => [
			..._,
			{
				institute: '',
				course: '',
				startDate: '',
				endDate: '',
				isCurrentlyStudying: false,
				result: '',
			},
		]);
	};

	const deleteEducation = (e, index) => {
		setEducationData((_) => _.filter((_, i) => i !== index));
	};

	const onExperienceDataChange = (e, index) => {
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		setExperienceData((_) =>
			_.map((_, i) => {
				if (i === index) return { ..._, [name]: value };
				return _;
			}),
		);
	};

	const addExperience = () => {
		setExperienceData((_) => [
			..._,
			{
				company: '',
				title: '',
				startDate: '',
				endDate: '',
				isCurrentlyWorking: false,
				summary: '',
			},
		]);
	};

	const deleteExperience = (e, index) => {
		setExperienceData((_) => _.filter((_, i) => i !== index));
	};

	const onProjectDataChange = (e, index) => {
		let { name, value, type, checked } = e.target;
		value = type === 'checkbox' ? checked : value;
		setProjectData((_) =>
			_.map((_, i) => {
				if (i === index) return { ..._, [name]: value };
				return _;
			}),
		);
	};

	const addProject = () => {
		setProjectData((_) => [
			..._,
			{
				title: '',
				startDate: '',
				endDate: '',
				isCurrentlyWorking: false,
				summary: '',
			},
		]);
	};

	const deleteProject = (e, index) => {
		setProjectData((_) => _.filter((_, i) => i !== index));
	};

	// for CV- toggle
	const submitHandler = (e) => {
		e.preventDefault();
		setIsEdit(false);
	};
	const editHandler = () => {
		setIsEdit(true);
	};

	useEffect(() => {
		localStorage.setItem('isEdit', JSON.stringify(isEdit));
	}, [isEdit]);

	//add a function to window.onscroll for making the toggle btns sticky
	useEffect(() => {
		const toggleWrapper = document.querySelector('.toggle-btns-wrapper');
		const sticky = toggleWrapper.offsetTop;

		const stickyToggleBar = () => {
			window.pageYOffset > sticky
				? toggleWrapper.classList.add('sticky')
				: toggleWrapper.classList.remove('sticky');
		};
		window.onscroll = () => stickyToggleBar();
	}, []);

	//for printing page as pdf
	const printPage = () => window.print();

	return (
		<>
			<div className='cv-wrapper'>
				<div className='toggle-btns-wrapper'>
					<button onClick={editHandler} className='btn-cv-toggle'>
						Edit
					</button>
					<button onClick={submitHandler} className='btn-cv-toggle'>
						Preview
					</button>
					{!isEdit && (
						<button onClick={printPage} className='btn-cv-toggle'>
							Print
						</button>
					)}
				</div>
				{isEdit ? (
					<EditableCV
						headerData={headerData}
						personalData={personalData}
						skillsData={skillsData}
						objectiveData={objectiveData}
						educationData={educationData}
						experienceData={experienceData}
						projectData={projectData}
						onHeaderDataChange={onHeaderDataChange}
						onPersonalDataChange={onPersonalDataChange}
						onSkillsDataChange={onSkillsDataChange}
						addSkillCategory={addSkillCategory}
						deleteSkillCategory={deleteSkillCategory}
						addSkill={addSkill}
						deleteSkill={deleteSkill}
						onObjectiveDataChange={onObjectiveDataChange}
						onEducationDataChange={onEducationDataChange}
						addEducation={addEducation}
						deleteEducation={deleteEducation}
						onExperienceDataChange={onExperienceDataChange}
						addExperience={addExperience}
						deleteExperience={deleteExperience}
						onProjectDataChange={onProjectDataChange}
						addProject={addProject}
						deleteProject={deleteProject}
					/>
				) : (
					<PreviewCV
						headerData={headerData}
						personalData={personalData}
						skillsData={skillsData}
						objectiveData={objectiveData}
						educationData={educationData}
						experienceData={experienceData}
						projectData={projectData}
					/>
				)}
			</div>
		</>
	);
}

export default Home;
