// videojs-framebyframe-plugin

const Button = videojs.getComponent('Button');

class FrameByFrameButton extends Button {
  constructor(player, options) {
    super(player, options);
    this.player = player;
    this.frameTime = 1/options.fps;
    this.step_size = options.value;
  }

  handleClick() {
    // Start by pausing the player
    this.player.pause();
    // Calculate movement distance
    var dist = this.frameTime * this.step_size;
    this.player.currentTime(this.player.currentTime() + dist);
  }
}

function framebyframe(options) {
    var player = this,
        frameTime = 1 / 30; // assume 30 fps

    player.ready(function() {
        //console.log('player', player);
        //console.log('player.controlBar.el()', player.controlBar.el());
        //let fsc = document.getElementsByClassName('vjs-fullscreen-control');
        //console.log('fsc', fsc);
        options.steps.forEach(function(opt) {
            var b = player.controlBar.addChild(
                new FrameByFrameButton(player, {
                    el: videojs.dom.createEl(
                        'button',
                        {
                            className: 'vjs-res-button vjs-control',
                            //innerHTML: '<div class="vjs-control-content" style="font-size: 11px; line-height: 28px;"><span class="vjs-fbf">' + opt.text + '</span></div>'
                            innerHTML: '<div class="vjs-control-content"><span class="vjs-fbf">' + opt.text + '</span></div>'
                        },
                        {
                            role: 'button'
                        }
                    ),
                    value: opt.step,
                    fps: options.fps,
                }),
            {}, opt.index);
            //console.log('b', b);
            //player.controlBar.el().insertBefore(b.el(), fsc.el_);
            //player.controlBar.el().insertBefore(b.el(), player.controlBar.fullscreenToggle.el());
            //console.log('children', player.controlBar);
            player.controlBar.el().insertBefore(b.el(), player.controlBar.seekBack.el());
        });
    });
}

videojs.registerComponent('FrameByFrameButton', FrameByFrameButton);

// Cross-compatibility for Video.js 5 and 6.
var registerPlugin = videojs.registerPlugin || videojs.plugin;

videojs.registerPlugin('framebyframe', framebyframe);
