################################################################
## Synchronize web site on the server

include ${RSAT}/makefiles/util.mk
MAKEFILE=makefile

EXCLUDED=--exclude *~ 	\
	--exclude .#*	\
	--exclude .DS_Store

## Directory to synchronize
EXCLUDED=--exclude jobs  \
	--exclude results \
	--exclude '*~' \
	--exclude '*.old' \
	--exclude '*.log' \
	--exclude '.DS_Store' \
	--exclude annotation_projects
RSYNC=rsync -ruptvl -e ssh -z  ${EXCLUDED} 

################################################################
## Clean temporary files created by emacs
clean:
	find . -name '*~' -exec rm {} \;
	find . -name '.#*' -exec rm {} \;
	find . -name '.DS_Store' -exec rm {} \;


################################################################
## Publish on the web site
TO_SYNC=*
publish: clean
	rsync -ruptvl ${EXCLUDED} ${OPT} ${TO_SYNC}  teacher@pedagogix-tagc.univ-mrs.fr:/homes/teacher/courses/SBBCU16L_cisreg/

################################################################
## Browse the Web site
BROWSER=firefox
local:
	open -a ${BROWSER} http://localhost/cisreg/

#WEB_URL=http://pedagogix-tagc.univ-mrs.fr/courses/SBBCU16L_cisreg
WEB_URL=http://jvanheld.github.io/cisreg_course/
web:
	open -a ${BROWSER} ${WEB_URL}

GITHUB_URL=https://github.com/jvanheld/cisreg_course/
gh:
	@echo
	@echo ${GITHUB_URL}
	open -a ${BROWSER} ${GITHUB_URL}
