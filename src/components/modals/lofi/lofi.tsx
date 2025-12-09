import { useState } from 'react';
import YouTube from 'react-youtube';

import { Modal } from '@/components/modal/modal';

import styles from './lofi.module.css';
import { padNumber } from '@/helpers/number';

interface LofiProps {
  onClose: () => void;
  show: boolean;
}

const videos = [
  {
    channel: 'Lofi Girl',
    id: 'jfKfPfyJRdk',
    title: 'lofi 嘻哈电台',
  },
  {
    channel: 'Lofi Girl',
    id: '4xDzrJKXOOY',
    title: '合成波电台',
  },
  {
    channel: 'Lofi Girl',
    id: 'P6Segk8cr-c',
    title: 'lofi 悲伤电台',
  },
  {
    channel: 'Lofi Girl',
    id: 'S_MOd40zlYU',
    title: '黑暗环境电台',
  },
  {
    channel: 'Lofi Girl',
    id: 'TtkFsfOP9QI',
    title: '平静钢琴电台',
  },
];

export function LofiModal({ onClose, show }: LofiProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <Modal persist show={show} onClose={onClose}>
      <h1 className={styles.title}>Lofi 音乐播放器</h1>

      {!isAccepted ? (
        <div className={styles.notice}>
          <p>
            此功能通过嵌入的 YouTube 视频播放音乐。继续即表示您同意连接至
            YouTube，其可能会依据其隐私政策收集数据。我们对此类数据无控制权，亦不会追踪。
          </p>

          <div className={styles.buttons}>
            <button onClick={onClose}>取消</button>
            <button
              className={styles.primary}
              onClick={() => setIsAccepted(true)}
            >
              继续
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.videos}>
          {videos.map((video, index) => (
            <div className={styles.video} key={video.id}>
              <h2>
                <span className={styles.index}>{padNumber(index + 1, 2)}</span>{' '}
                <strong>{video.channel}</strong> <span>/</span> {video.title}
              </h2>
              <div className={styles.container}>
                <YouTube iframeClassName={styles.iframe} videoId={video.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
