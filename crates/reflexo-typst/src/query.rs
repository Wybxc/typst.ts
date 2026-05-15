use reflexo::typst::TypstDocument;
use typst::{
    diag::{EcoString, StrResult},
    foundations::Content,
    World,
};

// todo: query exporter — needs eval_string API update
/// Retrieve the matches for the selector.
#[allow(unused_variables)]
pub fn retrieve(
    world: &dyn World,
    selector: &str,
    document: &TypstDocument,
) -> StrResult<Vec<Content>> {
    todo!("query exporter needs eval_string API update")
}
