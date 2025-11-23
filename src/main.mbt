///|
pub fn generate_id() -> String {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let mut id = "";
  let r = @random.Rand::new()  // 创建随机数生成器实例

  for _ in 0..<6 {
    let idx = r.int(limit=chars.length())  // 使用实例方法和命名参数
    let ch_view = chars.view(start_offset = idx, end_offset = idx + 1)
    id = id + ch_view.to_string()
  }
  id
}

fn main {
  let _ = generate_id()
}

pub fn validate(content: String) -> Bool {
  content.length() > 0 && content.length() < 100000
}
