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
      edge: 'rtmp://a.rtmp.youtube.com/live2/a0xb-xh58-r2b9-sy46-2er2',
	  appendName: false
    },
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/c32p-pq7e-6gmk-5t5a-8g45',
	  appendName: false
    },
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/mpdz-7at5-wxu7-rsaq-ehyc',
	  appendName: false
    },
	  
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/0x26-a1f0-kuvw-93q7-8ydt',
	  appendName: false
    },
	  
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/rk2-grs8-4sqq-u3by-4f5v',
	  appendName: false
    },
	  
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/15p2-r2ev-25yt-jhxm-cqe2',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/w6s9-qdbd-hyj1-2a5y-8m1c',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/xy96-sfas-w8jr-a3hp-cpbg',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/hks5-9vck-fj7d-dj2q-7272',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/j879-ud7k-0sm9-s4va-6v9p',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/mbpf-2wf7-ubz6-7w4v',
	  appendName: false
    },
	 
	{
      app: 'live',
      mode: 'push',
      edge: 'rtmp://a.rtmp.youtube.com/live2/6fjd-d7ct-mtxa-kky7-d0t0',
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

