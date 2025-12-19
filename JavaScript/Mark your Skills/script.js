let skillList = [
  {
    skillName: "HTML",
    uniqueNo: 1,
  },
  {
    skillName: "CSS",
    uniqueNo: 2,
  },
  {
    skillName: "JavaScript",
    uniqueNo: 3,
  },
];

let skillsListContainerEl = document.getElementById("skillsListContainer");

function onSkillStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  labelElement.classList.toggle("marked");
}

function createAndAppendSkill(skill) {
  let skillId = "skill" + skill.uniqueNo;
  let checkboxId = "checkbox" + skill.uniqueNo;
  let labelId = "label" + skill.uniqueNo;

  let skillElement = document.createElement("li");
  skillElement.classList.add("skills-list-container", "d-flex", "flex-row");
  skillElement.id = skillId;
  skillsListContainerEl.appendChild(skillElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function () {
    onSkillStatusChange(checkboxId, labelId);
  };
  inputElement.classList.add("checkbox-input");
  skillElement.appendChild(inputElement);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = skill.skillName;
  skillElement.appendChild(labelElement);
}

for (let skill of skillList) {
  createAndAppendSkill(skill);
}
