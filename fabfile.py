#Deployment using fabric. Modify the code according to your requirement. 
from fabric.api import local

def prepare_deploy():
    local("git add *")
    commit_msg = "Code updated"
    commit_msg =  raw_input("Enter commit message: ")
    local("git commit -m \""+commit_msg+"\"")
    local("git push origin master")


