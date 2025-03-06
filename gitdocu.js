const fetchGitWorkflowImage = async () => {
  const imagePath = "./images/git/Git_Workflow.png";
  const gitDocuContainer = document.getElementById("gitDocuContainer");

  const img = document.createElement("img");
  img.src = imagePath;
  img.alt = "Git Workflow";
  img.classList.add("git-workflow-image");

  gitDocuContainer.innerHTML = "";
  gitDocuContainer.appendChild(img);
};

document.addEventListener("DOMContentLoaded", fetchGitWorkflowImage);