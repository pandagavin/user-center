(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{429:function(s,a,e){"use strict";e.r(a);var n=e(20),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"快速上手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),e("h3",{attrs:{id:"加载软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载软件"}},[s._v("#")]),s._v(" 加载软件")]),s._v(" "),e("p",[s._v("系统上已经安装了 "),e("code",[s._v("WPS")]),s._v(" 和 "),e("code",[s._v("WRF-CHEM")]),s._v(" 软件的常用版本，我们可以通过 "),e("code",[s._v("module av")]),s._v(" 命令进行查看。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ module av wps\n\n\n$ module av wrf-chem\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("我们可以使用 "),e("code",[s._v("module add")]),s._v(" 命令进行软件加载，例如我们加载选择 "),e("code",[s._v("wps/4.3-icc18-impi")]),s._v(" 和 "),e("code",[s._v("wrf-chem/4.3-icc18-impi")]),s._v(" 进行加载")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wps/4.3-icc18-impi\nmodule "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wrf-chem/4.3-icc-impi\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("系统上预先安装了 "),e("code",[s._v("WRF")]),s._v(" / "),e("code",[s._v("WRF-CHEM")]),s._v(" / "),e("code",[s._v("WRC-CHEM-PRO")]),s._v(" / "),e("code",[s._v("WPS")]),s._v(" 等相关软件，安装路径可以通过 "),e("code",[s._v("module")]),s._v(" 命令获得，举例例如：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ module av wrf-chem\n----------------------- /work/software/modulefiles/applications -----------------------\nwrf-chem/4.1.5-icc18-impi  wrf-chem/4.2.2-icc18-impi  wrf-chem/4.3-icc18-impi\n$ module show wrf-chem/4.3-icc18-impi\n------------------------------------------\n/work/software/modulefiles/applications/wrf-chem/4.3-icc18-impi:\nmodule-whatis   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("loads the modules environment"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nmodule          load intel/2018u4\nmodule          load impi/2018u4\nmodule          load hdf5/1.10.7-icc18-impi\nmodule          load netcdf/4.8.0-icc18-impi\nmodule          load jasper/2.0.14-icc18\nconflict        wrf wrf-chem\nprepend-path    "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /work/software/wrf-chem/4.3-icc18-impi/main\nprepend-path    "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),s._v(" /work/software/wrf-chem/4.3-icc18-impi/run\nprepend-path    INCLUDE /work/software/wrf-chem/4.3-icc18-impi/inc\nprepend-path    LD_LIBRARY_PATH /work/software/wrf-chem/4.3-icc18-impi/lib\n------------------------------------------\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("其中，我们选择的 "),e("code",[s._v("wrf-chem/4.3-icc18-impi")]),s._v(" 的安装目录为 "),e("code",[s._v("/work/software/wrf/4.3-icc18-impi")]),s._v("，用户可以前往相关目录进行文件拷贝，例如")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r /work/software/wrf/4.3-icc18-impi/run "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("另外，如果需要用到 "),e("code",[s._v("ncl")]),s._v(" 命令，我们可以加载：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ncl\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"使用wps进行处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用wps进行处理"}},[s._v("#")]),s._v(" 使用WPS进行处理")]),s._v(" "),e("p",[s._v("首先进入自己要计算的任务的文件夹内")]),s._v(" "),e("h4",{attrs:{id:"_1-geogrid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-geogrid"}},[s._v("#")]),s._v(" 1.GEOGRID")]),s._v(" "),e("p",[s._v("编辑好 "),e("code",[s._v("namelist.wps")]),s._v(" 后，执行")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建软连接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/geogrid/geogrid.exe\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/geogrid/GEOGRID.TBL.你需要的 GEOGRID.TBL\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/util/plotgrids_new.ncl\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nncl plotgrids_new.ncl\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用srun命令，使用32个cpu核心进行计算")]),s._v("\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./geogrid.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"_2-ungrib"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ungrib"}},[s._v("#")]),s._v(" 2.UNGRIB")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建软连接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/ungrib/ungrib.exe\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/ungrib/Variable_Tables/Vtable.你需要的 Vtable\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /work/software/wps/4.3-icc18-impi/link_grib.csh\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化数据")]),s._v("\n./link_grib.csh 你的初始grib数据地址\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用srun命令，使用32个cpu核心进行计算")]),s._v("\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./ungrib.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"_3-metgrid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-metgrid"}},[s._v("#")]),s._v(" 3.METGRID")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用srun命令，使用32个cpu核心进行计算 ")]),s._v("\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./metgrid.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"使用wrf-chem进行计算"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用wrf-chem进行计算"}},[s._v("#")]),s._v(" 使用WRF-CHEM进行计算")]),s._v(" "),e("h4",{attrs:{id:"_1-real"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-real"}},[s._v("#")]),s._v(" 1.REAL")]),s._v(" "),e("p",[s._v("编辑好 "),e("code",[s._v("namelist.input")]),s._v(" 以后，chem_opt="),e("code",[s._v("0")])]),s._v(" "),e("p",[s._v("编写一个提交脚本 "),e("code",[s._v("Sub_real.sh")]),s._v(" 内容如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./real.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("在编写提交脚本时，如果不会使用集群上的 "),e("code",[s._v("vim")]),s._v(" 编辑器，可以在本地编辑改脚本，然后上传即可。如果出现格式问题，可以执行 "),e("code",[s._v("dos2unix 脚本名")]),s._v("，将脚本改为 "),e("code",[s._v("Unix")]),s._v(" 格式。")])]),s._v(" "),e("p",[s._v("然后使用命令进行任务提交：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("sbatch -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" Sub_real.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-prep-chem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-prep-chem"}},[s._v("#")]),s._v(" 2.PREP_CHEM")]),s._v(" "),e("p",[s._v("这一部分需要根据用户自己所使用的数据来源进行准备。可以不提供具体的布置。")]),s._v(" "),e("p",[s._v("将wrfbiochemi_"),e("domain",[s._v("、wrfchemi_"),e("date",[s._v("_"),e("domain",[s._v("准备好，放入同文件夹")])],1)],1)],1),s._v(" "),e("h4",{attrs:{id:"_3-real"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-real"}},[s._v("#")]),s._v(" 3.REAL")]),s._v(" "),e("p",[s._v("编辑好 "),e("code",[s._v("namelist.input")]),s._v(" 以后， chem_opt="),e("code",[s._v("你需要的")])]),s._v(" "),e("p",[s._v("编写一个提交脚本 "),e("code",[s._v("Sub_real.sh")]),s._v(" 内容如下:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -s unlimited\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./real.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后使用命令进行任务提交：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("sbatch -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" Sub_real.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-wrf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-wrf"}},[s._v("#")]),s._v(" 4.WRF")]),s._v(" "),e("p",[s._v("编写一个提交脚本 "),e("code",[s._v("Sub_wrf.sh")]),s._v(" 内容如下:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -s unlimited\nsrun -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" ./wrf.exe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后使用命令进行任务提交：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("sbatch -n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" Sub_wrf.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"更多信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[s._v("#")]),s._v(" 更多信息")]),s._v(" "),e("h3",{attrs:{id:"软件环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#软件环境"}},[s._v("#")]),s._v(" 软件环境")]),s._v(" "),e("h4",{attrs:{id:"wrf-chem-processors-工"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrf-chem-processors-工"}},[s._v("#")]),s._v(" WRF-CHEM PROCESSORS 工")]),s._v(" "),e("p",[s._v("系统上 "),e("code",[s._v("WRF-CHEM PROCESSORS")]),s._v(" 工具环境，加载方式为")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" wrf-chem-pro\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("该软件的 "),e("code",[s._v("data")]),s._v(" 数据存放目录为 "),e("code",[s._v("/work/software/wrf-chem-pro/data")])]),s._v(" "),e("h4",{attrs:{id:"ncview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ncview"}},[s._v("#")]),s._v(" NCVIEW")]),s._v(" "),e("p",[s._v("系统安装了 "),e("code",[s._v("NCVIEW")]),s._v(" 工具，加载方式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载")]),s._v("\nmodule "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" ncview/2.1.7-icc18\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\nncview\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"wrfdomainwizard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wrfdomainwizard"}},[s._v("#")]),s._v(" WRFDomainWizard")]),s._v(" "),e("p",[s._v("系统安装了 "),e("code",[s._v("WRFDomainWizard")]),s._v(" 工具，加载方式：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加载")]),s._v("\nmodule load WRFDomainWizard/2.84\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用")]),s._v("\nrun_DomainWizard\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"prep-chem-sources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prep-chem-sources"}},[s._v("#")]),s._v(" prep_chem_sources")]),s._v(" "),e("p",[s._v("我们安装了 "),e("code",[s._v("prep-chem")]),s._v(" 工具，加载方式为：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("module "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" prep-chem/1.5\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装路径为："),e("code",[s._v("/work/software/prep-chem/1.5")]),s._v(" 其中包含了可能会用到的数据。")]),s._v(" "),e("h3",{attrs:{id:"数据环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据环境"}},[s._v("#")]),s._v(" 数据环境")]),s._v(" "),e("p",[s._v("系统上预先下载好了常用的数据环境，存放在了 "),e("code",[s._v("/work/software/wrfdata")]),s._v(" 目录下，用户可以直接使用，或者拷贝到自己的账号下使用，")]),s._v(" "),e("p",[s._v("已配置的常用数据包括：")]),s._v(" "),e("ul",[e("li",[s._v("1.wps地形输入数据——高精度：\n"),e("ul",[e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_high_res_mandatory.tar.gz")])])]),s._v(" "),e("li",[s._v("2.wps地形输入数据——低精度：\n"),e("ul",[e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_low_res_mandatory.tar.gz")])])]),s._v(" "),e("li",[s._v("3.wps地形输入数据——额外数据：\n"),e("ul",[e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_nmm.tar.gz")]),s._v(" "),e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_thompson28_chem.tar.gz")]),s._v(" "),e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_noahmp.tar.gz")]),s._v(" "),e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/irrigation.tar.gz")]),s._v(" "),e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/geog_ssib.tar.gz")]),s._v(" "),e("li",[s._v("https://www2.mmm.ucar.edu/wrf/src/wps_files/lake_depth.tar.bz2")])])]),s._v(" "),e("li",[s._v("4.prep-chem-sources化学初始数据下载地址：\n"),e("ul",[e("li",[s._v("ftp://aftp.fsl.noaa.gov/divisions/taq/emissions_data_2005/em05v2_file*.tar")]),s._v(" "),e("li",[s._v("ftp://aftp.fsl.noaa.gov/divisions/taq/emissions_data_2011/em11v1_file*.tar")]),s._v(" "),e("li",[s._v("ftp://aftp.fsl.noaa.gov/divisions/taq/global_emissions/global_emissions_v3_24aug2015.tar.gz")])])]),s._v(" "),e("li",[s._v("5.wrf-chem提供的megan初始数据：\n"),e("ul",[e("li",[s._v("https://www.acom.ucar.edu/wrf-chem/megan.data.tar.gz")])])]),s._v(" "),e("li",[s._v("6.wrf-chem提供的edgar-htap数据：\n"),e("ul",[e("li",[s._v("https://www.acom.ucar.edu/webt/wrf-chem/processors/EDGAR-HTAP.tgz")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);