require(['js/config.js'], function() {
    require(['mui'], function(mui) {

        mui.init();

        function init() {
            getData();
        }

        function getData() {
            mui.ajax('/api/list', {
                success: (rs) => {
                    if (rs.code === 0) {
                        render(rs.data);
                    }
                }
            });
        }

        function render(data) {
            let nav = document.querySelector('.nav');
            let spn = [...nav.children];
            let idx = 0;

            mui(".nav").on('tap', 'span', function() {
                let index = this.getAttribute('data-index');
                spn[idx].classList.remove('active');
                this.classList.add('active');
                idx = index;
                if (index == 0) {
                    renderList(data[0]);
                } else if (index == 1) {
                    renderList2(data[1]);
                } else if (index == 2) {
                    renderList2(data[2]);
                } else if (index == 3) {
                    renderList2(data[3]);
                }
            });
        }

        function renderList(data) {
            let main = document.querySelector('.main');
            console.log(data);
            data.data.map(item => {
                main.innerHTML += ` <div>
							<p>
								<div>
									<img src="${item.img}" alt="">
									<span>${item.name}</span><span>${item.date}</span>
								</div>
								<div>TOP饭圈头条</div>
							</p>
							<p>
							${item.content}
							</p>
							<p>${item.help}</p>
						</div>`
            });
        }

        function renderList2(data) {
            let main = document.querySelector('.main');
            console.log(data);
            main.innerHTML = '';
            data.data.map(item => {
                main.innerHTML += ` <div>
							<p>
								<div>
									<img src="${item.img}" alt="">
									<span>${item.name}</span><span>${item.good}</span>
								</div>
								
							</p>
						</div>`
            });
        }
        init();
    });
});