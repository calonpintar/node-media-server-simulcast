const NodeMediaServer = require('./');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    mediaroot: './media',
    webroot: './www',
    allow_origin: '*',
    api: true
  },
  https: {
    port: 8443,
    key: './privatekey.pem',
    cert: './certificate.pem',
  },
  auth: {
    api: true,
    api_user: 'admin',
    api_pass: 'admin',
    play: false,
    publish: false,
    secret: 'nodemedia2017privatekey'
  },
    trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        mp4: true,
        mp4Flags: '[movflags=faststart]',
      },
	  {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  },
  relay: {
  ffmpeg: '/usr/bin/ffmpeg',
  tasks: [
    {
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/s05a-qy5w-99wt-rcd9-49yr',
	  appendName: false
    },
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/8brg-qj6w-g55k-5zkt',
	  appendName: false
    },
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/6tq7-rthu-3w15-4muy-chpw',
	  appendName: false
    },
	  
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/2up5-pfad-egf7-m3xm-brxy',
	  appendName: false
    },
	  
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/06yz-es1c-jp0j-hq4a-2v0m',
	  appendName: false
    }
  ]
  },
};


let nms = new NodeMediaServer(config)
nms.run();

nms.on('preConnect', (id, args) => {
  console.log('[NodeEvent on preConnect]', `id=${id} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postConnect', (id, args) => {
  console.log('[NodeEvent on postConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('doneConnect', (id, args) => {
  console.log('[NodeEvent on doneConnect]', `id=${id} args=${JSON.stringify(args)}`);
});

nms.on('prePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePublish', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('prePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on prePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
  // let session = nms.getSession(id);
  // session.reject();
});

nms.on('postPlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on postPlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.on('donePlay', (id, StreamPath, args) => {
  console.log('[NodeEvent on donePlay]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

