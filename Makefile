python_version_full := $(wordlist 2,4,$(subst ., ,$(shell python --version 2>&1)))
python_version_major := $(word 1,${python_version_full})

server.python.2 := python -m SimpleHTTPServer
server.python.3 := python -m http.server
server := ${server.python.${python_version_major}}

install-theme:
	git clone git@github.com:biaslab/hugo-academic-group.git ./themes/academic-group;
update-theme:
	cd ./themes/academic-group; git pull
build-website:
	hugo -t academic-group
debug-website:
	hugo server -t academic-group -w
debug-website-local:
	hugo server -t academic-group -w --config config.local.toml
preview-website:
	hugo -t academic-group
	cd ./public; ${server}
preview-website-local:
	hugo -t academic-group --config config.local.toml
	cd ./public; ${server}
publish:
	./publish.sh
