import toast from 'react-hot-toast'

class Toast {
  static show(message: string, type: string = 'error'): void {
    switch (type) {
      case 'success':
        toast.success(
          () => (
            <div>
              {message.split('\n').map((text) => (
                <p>{text}</p>
              ))}
            </div>
          ),
          {
            duration: 4000,
            position: 'top-right',
            style: {
              borderLeft: '12px solid var(--primary)',
              minHeight: 60,
              borderRadius: 4,
            },
          },
        )
        break
      case 'error':
        toast.error(
          () => (
            <div>
              {message.split('\n').map((text) => (
                <p>{text}</p>
              ))}
            </div>
          ),
          {
            duration: 4000,
            position: 'top-right',
            style: {
              borderLeft: '12px solid var(--primary)',
              minHeight: 60,
              borderRadius: 4,
            },
          },
        )
        break
      default:
        break
    }
  }
}

export default Toast