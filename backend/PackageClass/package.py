from json import JSONEncoder,dumps
class Package:
    def __init__(self, pkg_name):
        self._name = pkg_name
        self._description = ""
        self._version = ""
        self._pre_depends = []
        self._depends = []
        self._conflicts = []
        self._breaks = []
        self._replaces = []
        self._installed_size = -1
        self._download_size = -1
        self._homepage = ""
        self._maintainer = ""

    @property
    def name(self):
        return self._name

    @property
    def description(self):
        return self._description

    @property
    def version(self):
        return self._version

    @property
    def dependencies(self):
        return list(self._pre_depends + self._depends)

    @property
    def conflicts(self):
        return list(
            self._conflicts + self._breaks + self._replaces)  # TODO: If X breaks & replaces Y, then Y will be removed and replaced by X by PM

    @property
    def installed_size(self):
        return self._installed_size

    @property
    def download_size(self):
        return self._download_size

    @property
    def homepage(self):
        return self._homepage

    @property
    def maintainer(self):
        return self._maintainer

    def __str__(self):
        return {
            "name": self._name,
            "description": self._description,
            "version": self._version,
            "pre_depends": self._pre_depends,
            "depends": self._depends,
            "conflicts": self._conflicts,
            "breaks": self._breaks,
            "replaces": self._replaces,
            "installed_size": self._installed_size,
            "download_size": self._download_size,
            "homepage": self._homepage,
            "maintainer": self._maintainer

        }

    def __repr__(self):
        return self.__str__()
