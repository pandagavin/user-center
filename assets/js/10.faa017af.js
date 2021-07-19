(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{425:function(s,e,a){"use strict";a.r(e);var t=a(20),v=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"快速入门教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速入门教程"}},[s._v("#")]),s._v(" 快速入门教程")]),s._v(" "),a("p",[s._v("本系列教程介绍如何快速入门使用超算集群")]),s._v(" "),a("p",[s._v("本次介绍 "),a("code",[s._v("WRF")]),s._v(" 软件")]),s._v(" "),a("h2",{attrs:{id:"步骤1-登陆系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-登陆系统"}},[s._v("#")]),s._v(" 步骤1：登陆系统")]),s._v(" "),a("h3",{attrs:{id:"下载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载软件"}},[s._v("#")]),s._v(" 下载软件")]),s._v(" "),a("p",[s._v("下载 "),a("code",[s._v("SSH")]),s._v(" 登陆软件，推荐使用 "),a("a",{attrs:{href:"https://mobaxterm.mobatek.net/download-home-edition.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mobaxterm"),a("OutboundLink")],1),s._v(" 软件, 下载并安装即可（可以使用 Portable 版本，双击即可使用）。")]),s._v(" "),a("h3",{attrs:{id:"建立会话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立会话"}},[s._v("#")]),s._v(" 建立会话")]),s._v(" "),a("p",[s._v("打开软件，新建一个建立 "),a("code",[s._v("SSH")]),s._v(" 链接：")]),s._v(" "),a("ol",[a("li",[s._v("菜单栏 - "),a("code",[s._v("Sessions")]),s._v(" - "),a("code",[s._v("SSH")]),s._v(" 新建一个回话")]),s._v(" "),a("li",[s._v("填写远程主机IP "),a("code",[s._v("Remote Host")]),s._v(" : "),a("code",[s._v("111.198.60.163")])]),s._v(" "),a("li",[s._v("勾选 "),a("code",[s._v("Specify username")]),s._v("，输入用户名；")]),s._v(" "),a("li",[s._v("修改端口号 "),a("code",[s._v("Port")]),s._v(" 为 "),a("code",[s._v("53103")]),s._v(" ， 然后点击 "),a("code",[s._v("OK")]),s._v(" 确定；")]),s._v(" "),a("li",[s._v("然后根据提示，输入登陆密码即可登陆")])]),s._v(" "),a("h2",{attrs:{id:"步骤2-加载软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-加载软件"}},[s._v("#")]),s._v(" 步骤2：加载软件")]),s._v(" "),a("p",[s._v("登陆后，输入 "),a("code",[s._v("module av")]),s._v(" 命令，可以查看可用的软件列表。")]),s._v(" "),a("p",[s._v("输入 "),a("code",[s._v("module add wrf")]),s._v(" ，即可加载 "),a("code",[s._v("wrf")]),s._v(" 软件")]),s._v(" "),a("h2",{attrs:{id:"步骤3-提交作业"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-提交作业"}},[s._v("#")]),s._v(" 步骤3：提交作业")]),s._v(" "),a("p",[s._v("用户在本地提交并行的计算任务，可能用过例如 "),a("code",[s._v("mpirun -n 16 wrf.exe")]),s._v("  这样的命令。")]),s._v(" "),a("p",[s._v("在超算集群中，需要用户编写一个提交脚本 "),a("code",[s._v("sub.sh")]),s._v(" ，内容写上：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\nsrun -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" wrf.exe\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("如果不会使用集群上的 "),a("code",[s._v("vim")]),s._v(" 编辑器，可以在本地编辑改脚本，然后上传即可。如果出现格式问题，可以执行 "),a("code",[s._v("dos2unix 脚本名")]),s._v("，将脚本改为 "),a("code",[s._v("Unix")]),s._v(" 格式。")])]),s._v(" "),a("p",[s._v("然后使用 "),a("code",[s._v("sbatch")]),s._v(" 命令进行任务提交：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("sbatch -n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" sub.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后使用 "),a("code",[s._v("squeue")]),s._v(" 命令查看已提交的作业。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("squeue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[s._v("wrf软件的安装路径为："),a("code",[s._v("/work/software/wrf/4.2.2-icc18-impi")]),s._v(" ，用户可以将其中的例如 "),a("code",[s._v("run")]),s._v(" 文件夹拷贝到本地使用，例如")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -r /work/software/wrf/4.2.2-icc18-impi/run "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("更多内容请参考"),a("RouterLink",{attrs:{to:"/manual/system/"}},[s._v("用户手册")])],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);